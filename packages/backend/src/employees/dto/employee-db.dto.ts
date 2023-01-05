import { EmployeeDatabase } from '@sales-app/types';

export class EmployeeDbDto implements EmployeeDatabase {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}
