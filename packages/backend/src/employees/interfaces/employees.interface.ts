import { EmployeeDatabase } from '@sales-app/types';
import { CreateEmployeeDto } from '../dto/create-employee.dto';
import { EmployeeDto } from '../dto/employee.dto';

export abstract class EmployeesInterface {
  abstract findByEmail(email: string): Promise<EmployeeDatabase>;
  abstract create(employeeData: CreateEmployeeDto): Promise<CreateEmployeeDto>;
}
