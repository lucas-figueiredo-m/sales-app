import { Expose } from 'class-transformer';
import { Employee } from '@sales-app/types';

export class EmployeeDto implements Employee {
  @Expose()
  id: number;

  @Expose()
  first_name: string;

  @Expose()
  last_name: string;

  @Expose()
  email: string;

  @Expose()
  phone: string;

  @Expose()
  access_token: string;
}
