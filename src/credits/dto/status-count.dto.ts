import { ApiProperty } from '@nestjs/swagger';

export class StatusCountDto {
  @ApiProperty({ example: 'Approved' })
  status: string;

  @ApiProperty({ example: 15 })
  total: number;
}
