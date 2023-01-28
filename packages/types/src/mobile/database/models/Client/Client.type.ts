export type Client = {
  id: string;
  employeeId: number;
  companyName: string;
  tradeName: string;
  taxpayerId: string;
  type: string;
  buyerFirstName: string;
  buyerLastName: string;
  phone: string;
  address: string;
  number: string;
  complement: string;
  zipCode: string;
  active: boolean;
};

export type ClientWithoutId = Omit<Client, 'id'>;
