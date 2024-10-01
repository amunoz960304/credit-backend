import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';
import { CreditsModule } from './credits/credits.module';
import { ClientsModule } from './clients/clients.module';
import { BranchesModule } from './branches/branches.module';
import { Client } from './clients/entities/client.entity';
import { Credit } from './credits/entities/credit.entity';
import { Branch } from './branches/entities/branch.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST_DB,
      port: +process.env.PORT_DB,
      username: process.env.USER_DB,
      password: process.env.PWD_DB,
      database: process.env.NAME_DB,
      entities: [User, Client, Credit, Branch],
      synchronize: true,
    }),
    ConfigModule.forRoot(),
    UsersModule,
    AuthModule,
    CreditsModule,
    ClientsModule,
    BranchesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
