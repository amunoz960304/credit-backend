import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateClientDto } from './create-client.dto';

export class UpdateClientDto extends CreateClientDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
