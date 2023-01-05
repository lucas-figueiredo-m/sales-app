export type EmployeeDatabase = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
};

export type CreateEmployee = Omit<EmployeeDatabase, 'id'>;

export type Employee = Omit<EmployeeDatabase, 'password'>;
