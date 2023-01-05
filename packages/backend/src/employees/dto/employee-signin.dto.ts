import { IsNotEmpty, IsEmail } from 'class-validator';
import { EmployeeSignIn } from '@sales-app/types';

export class EmployeeSignInDto implements EmployeeSignIn {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
