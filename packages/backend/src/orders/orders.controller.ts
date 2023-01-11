import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateOrderDto } from './dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  createNewOrder(@Body() body: CreateOrderDto) {
    return this.ordersService.create(body);
  }

  @Get()
  getOrderById(@Query('id') id: string) {
    return this.ordersService.getById(parseInt(id));
  }
}
