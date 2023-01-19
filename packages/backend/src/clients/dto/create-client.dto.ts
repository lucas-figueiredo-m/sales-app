import { CreateClient } from '@sales-app/types';
import {
  IsMobilePhone,
  IsNotEmpty,
  IsNumberString,
  Length,
} from 'class-validator';
import { IsValidTaxpayerId, IsValidClientType } from '../../validators';

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
  @IsMobilePhone('pt-BR')
  phone: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  @IsValidClientType()
  type: string;

  number: string;

  complement: string;

  @IsNotEmpty()
  @IsNumberString()
  @Length(8, 8)
  zipCode: string;
}
