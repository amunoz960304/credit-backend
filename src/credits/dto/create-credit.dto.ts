import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  IsOptional,
} from 'class-validator';

export class CreateCreditDto {
  @ApiProperty({ example: 'John@correo.com' })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({ example: 'John Snow' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'John Snow' })
  @IsString()
  lastname: string;

  @ApiProperty({ example: 10000 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  incomes: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  branchId: number;

  @ApiProperty({ example: 100000 })
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  amount: number;

  @ApiProperty({ example: 24 })
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  installments: number;

  @IsOptional()
  monthlyPayment: number | null;

  @IsOptional()
  totalPayment: number | null;
}
