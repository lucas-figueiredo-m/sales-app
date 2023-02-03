import { EmployeeDatabase } from '@sales-app/types';

export class EmployeeDbDto implements EmployeeDatabase {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
}
