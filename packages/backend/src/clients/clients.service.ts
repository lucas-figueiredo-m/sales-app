import { Client } from '@prisma/client';
import { PrismaService } from '../services';
import { Injectable } from '@nestjs/common';
import { ClientInterface } from './interfaces/client.interface';
import { CreateClientDto } from './dto';

@Injectable()
export class ClientsService implements ClientInterface {
  constructor(private prisma: PrismaService) {}
  async create(
    employeeId: number,
    clientData: CreateClientDto
  ): Promise<{ dto: Client }> {
    const client = await this.prisma.client.create({
      data: {
        employeeId,
        ...clientData,
      },
    });

    return {
      dto: client,
    };
  }

  async getAll(): Promise<{ dto: Client[] }> {
    const clients = await this.prisma.client.findMany();

    return {
      dto: clients,
    };
  }

  async getClientsByEmployeeId(employeeId: number): Promise<{ dto: Client[] }> {
    const clients = await this.prisma.client.findMany({
      where: { employeeId },
    });

    return {
      dto: clients,
    };
  }
}
