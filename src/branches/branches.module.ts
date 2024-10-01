import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BranchesService } from './branches.service';
import { Branch } from './entities/branch.entity';
import { BranchesController } from './branches.controller';

@Module({
  providers: [BranchesService],
  imports: [TypeOrmModule.forFeature([Branch])],
  exports: [BranchesService],
  controllers: [BranchesController],
})
export class BranchesModule {}
