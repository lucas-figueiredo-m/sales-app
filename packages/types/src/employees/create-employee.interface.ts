export type EmployeeDatabase = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
};

export type CreateEmployee = Omit<EmployeeDatabase, 'id'>;

export type Employee = Omit<EmployeeDatabase, 'password'> & {
  access_token: string;
};
