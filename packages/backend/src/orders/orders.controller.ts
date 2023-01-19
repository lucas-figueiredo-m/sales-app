import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateOrderDto } from './dto';
import { UpdateOrderDto } from './dto/update-order.dto';
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

  @Get('/client')
  getClientOrders(@Query('id') id: string) {
    return this.ordersService.getClientOrders(parseInt(id));
  }

  @Get('/employee')
  getEmployeeOrders(@Query('id') id: string) {
    return this.ordersService.getEmployeeOrders(parseInt(id));
  }

  @Delete()
  deleteOrder(@Query('id') id: string) {
    return this.ordersService.delete(parseInt(id));
  }

  @Put()
  updateClientOrder(@Query('id') id: string, @Body() body: UpdateOrderDto) {
    // TODO: validate if client belongs to employee. Avoid cross-employee updates
    return this.ordersService.update(parseInt(id), body);
  }
}
