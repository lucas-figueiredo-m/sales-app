import { Client } from '@prisma/client';
import { CreateClientDto } from '../dto';

export abstract class ClientInterface {
  abstract create(
    employeeId: number,
    clientData: CreateClientDto
  ): Promise<{ dto: Client }>;
  abstract getAll(): Promise<{ dto: Client[] }>;
  abstract getClientsByEmployeeId(
    employeeId: number
  ): Promise<{ dto: Client[] }>;
}
