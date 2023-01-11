import { Module } from '@nestjs/common';

import { ClientModule } from '@backend/clients';
import { EmployeesModule } from './employees';
import { PrismaModule } from './services/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    EmployeesModule,
    ClientModule,
    PrismaModule,
    AuthModule,
    ProductsModule,
    OrdersModule,
  ],
})
export class AppModule {}
