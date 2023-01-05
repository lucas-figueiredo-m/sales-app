import { CreateClient } from '@sales-app/types';
import { IsNotEmpty } from 'class-validator';

export class CreateClientDto implements CreateClient {
  @IsNotEmpty()
  companyName: string;

  @IsNotEmpty()
  tradeName: string;

  @IsNotEmpty()
  taxpayerId: string;

  @IsNotEmpty()
  buyerFirstName: string;

  @IsNotEmpty()
  buyerLastName: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  number: string;

  complement: string;

  @IsNotEmpty()
  zipCode: string;
}
