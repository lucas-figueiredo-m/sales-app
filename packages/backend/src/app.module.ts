import { Module } from '@nestjs/common';

import { ClientModule } from '@backend/clients';
import { EmployeesModule } from './employees';
import { PrismaModule } from './services/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [EmployeesModule, ClientModule, PrismaModule, AuthModule],
})
export class AppModule {}
