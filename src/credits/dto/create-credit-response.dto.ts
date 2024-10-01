import { ApiProperty } from '@nestjs/swagger';

export class CreateCreditResponseDto {
  @ApiProperty({ example: 'Approved' })
  status: string;

  @ApiProperty({ example: 1200 })
  monthlyPayment: number;

  @ApiProperty({ example: 1200 })
  totalPayment: number;
}
