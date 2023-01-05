import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateClientDto } from './dto';
import { ClientInterface } from './interfaces';

@Controller('clients')
export class ClientsController {
  // constructor(private clientsRepository: ClientInterface) {}
  // @Get()
  // async getAllClients() {
  //   const client = await this.clientsRepository.getAll();
  //   return client;
  // }
  // @Post()
  // async createNewClient(@Body() body: CreateClientDto) {
  //   const client = await this.clientsRepository.create(1, body);
  //   return client;
  // }
}
