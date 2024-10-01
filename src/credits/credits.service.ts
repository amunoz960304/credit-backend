import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Credit } from './entities/credit.entity';
import { CreateCreditDto } from './dto/create-credit.dto';
import { ClientsService } from '../clients/clients.service';
import { BranchesService } from '../branches/branches.service';
import { CreateCreditResponseDto } from './dto/create-credit-response.dto';
import { CreditsHelper } from './helpers/credits.helper';

type StatusCount = {
  status: string;
  total: number;
};

@Injectable()
export class CreditsService {
  constructor(
    @InjectRepository(Credit)
    private creditRepository: Repository<Credit>,
    private clientService: ClientsService,
    private branchService: BranchesService,
    private readonly creditsHelper: CreditsHelper,
  ) {}

  async create(
    createCreditDto: CreateCreditDto,
  ): Promise<CreateCreditResponseDto> {
    const { email, lastname, incomes, name, branchId, amount, installments } =
      createCreditDto;

    const branch = await this.branchService.find(branchId);

    let client = await this.clientService.findByEmail(createCreditDto.email);

    if (!client) {
      client = await this.clientService.create({
        name,
        lastname,
        email,
        incomes,
      });
    }

    if (client.incomes !== incomes) {
      client.incomes = incomes;
      await this.clientService.update(client);
    }

    const paymentInfo = this.creditsHelper.calculatePayments(
      amount,
      installments,
    );

    const credit = this.creditRepository.create({
      ...createCreditDto,
      ...paymentInfo,
      branch,
      client,
    });

    await this.creditRepository.save(credit);

    return paymentInfo;
  }

  async findAll(): Promise<Credit[]> {
    return this.creditRepository.find({
      relations: ['client', 'branch'],
    });
  }

  async getCreditRequestStatusCountFromProcedure(): Promise<StatusCount[]> {
    const [result] = await this.creditRepository.query(
      `CALL GetCreditRequestStatusCount();`,
    );

    return result;
  }
}
