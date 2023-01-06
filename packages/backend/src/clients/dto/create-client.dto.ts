import { CreateClient } from '@sales-app/types';
import { IsNotEmpty, Length } from 'class-validator';
import { IsValidTaxpayerId } from '../../validators';

export class CreateClientDto implements CreateClient {
  @IsNotEmpty()
  companyName: string;

  @IsNotEmpty()
  tradeName: string;

  @IsNotEmpty()
  @Length(14, 14)
  @IsValidTaxpayerId()
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
