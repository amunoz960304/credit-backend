import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { BranchResponseDto } from '../../branches/dto/branch-response.dto';
import { ClientResponseDto } from '../../clients/dto/client-response.dto';
import { CreateCreditDto } from './create-credit.dto';

export class FindCreditsResponseDto extends CreateCreditDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiProperty({ example: 'Pending' })
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty({ type: ClientResponseDto })
  @ValidateNested()
  @Type(() => ClientResponseDto)
  client: ClientResponseDto;

  @ApiProperty({ type: BranchResponseDto })
  @ValidateNested()
  @Type(() => BranchResponseDto)
  branch: BranchResponseDto;
}
