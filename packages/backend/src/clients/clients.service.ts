import { Client, Prisma } from '@prisma/client';
import { PrismaService } from '../services';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ClientInterface } from './interfaces/client.interface';
import { CreateClientDto } from './dto';

@Injectable()
export class ClientsService implements ClientInterface {
  constructor(private prisma: PrismaService) {}
  async create(
    employeeId: number,
    clientData: CreateClientDto
  ): Promise<{ dto: Client }> {
    try {
      const client = await this.prisma.client.create({
        data: {
          employeeId,
          ...clientData,
        },
      });

      return {
        dto: client,
      };
    } catch (error) {
      if (!(error instanceof Prisma.PrismaClientKnownRequestError)) throw error;

      if (error.code !== 'P2002') throw error;

      throw new BadRequestException('Client already exists');
    }
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
      orderBy: { tradeName: 'asc' },
    });

    return {
      dto: clients,
    };
  }

  async deactivateClient(clientId: number) {
    return await this.prisma.client.update({
      where: { id: clientId },
      data: { active: false },
    });
  }

  async activateClient(clientId: number) {
    return await this.prisma.client.update({
      where: { id: clientId },
      data: { active: true },
    });
  }
}
