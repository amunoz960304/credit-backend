import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditsController } from './credits.controller';
import { CreditsService } from './credits.service';
import { Credit } from './entities/credit.entity';
import { ClientsModule } from '../clients/clients.module';
import { BranchesModule } from '../branches/branches.module';
import { CreditsHelper } from './helpers/credits.helper';

@Module({
  controllers: [CreditsController],
  providers: [CreditsService, CreditsHelper],
  exports: [CreditsService],
  imports: [TypeOrmModule.forFeature([Credit]), ClientsModule, BranchesModule],
})
export class CreditsModule {}
