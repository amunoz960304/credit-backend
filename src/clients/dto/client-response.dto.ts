import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsEmail } from 'class-validator';

export class ClientResponseDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiProperty({ example: 'John Snow' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'John@correo.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 12000 })
  @IsNumber()
  incomes: number;
}
