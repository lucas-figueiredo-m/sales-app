import { IsNotEmpty, IsEmail, IsPhoneNumber } from 'class-validator';
import { CreateEmployee } from '@sales-app/types';

export class CreateEmployeeDto implements CreateEmployee {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber('BR')
  phone: string;

  @IsNotEmpty()
  password: string;
}
