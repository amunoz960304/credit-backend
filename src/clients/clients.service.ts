import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import type { CreateClientDto } from './dto/create-client.dto';
import type { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async findByEmail(email: string): Promise<Client | null> {
    return await this.clientRepository.findOne({ where: { email } });
  }

  async create(client: CreateClientDto): Promise<Client> {
    const newClient = this.clientRepository.create(client);
    return await this.clientRepository.save(newClient);
  }

  async update(client: UpdateClientDto): Promise<Client> {
    return await this.clientRepository.save(client);
  }
}
