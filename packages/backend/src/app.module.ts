import { Module } from '@nestjs/common';

import {
  ClientInterface,
  ClientsService,
  ClientModule,
} from '@backend/clients';
import { EmployeesModule } from './employees';
import { PrismaModule } from './services/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [EmployeesModule, ClientModule, PrismaModule, AuthModule],
  providers: [{ provide: ClientInterface, useClass: ClientsService }],
})
export class AppModule {}
