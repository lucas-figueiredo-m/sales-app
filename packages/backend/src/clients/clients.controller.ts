import { Body, Controller, Get, Post } from '@nestjs/common';
import { DecodedJwt } from '@sales-app/types';
import { CurrentEmployee } from '../decorators/current-employee.decorator';
import { CreateClientDto } from './dto';
import { ClientInterface } from './interfaces';

@Controller('clients')
export class ClientsController {
  constructor(private clientsRepository: ClientInterface) {}
  @Get()
  async getAllClients(@CurrentEmployee() employee: DecodedJwt) {
    const client = await this.clientsRepository.getClientsByEmployeeId(
      employee.employeeId
    );
    return client;
  }

  @Post()
  async createNewClient(
    @Body() body: CreateClientDto,
    @CurrentEmployee() employee: DecodedJwt
  ) {
    const client = await this.clientsRepository.create(
      employee.employeeId,
      body
    );
    return client;
  }
}
