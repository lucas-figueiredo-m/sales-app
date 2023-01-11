import { OrderItems, Orders } from '@prisma/client';
import { CreateOrderType, OrderData } from '@sales-app/types';

export abstract class OrdersInterface {
  abstract create(orderData: CreateOrderType): Promise<void>;
  abstract getById(
    orderId: number
  ): Promise<Orders & { OrderItems: OrderItems[] }>;
  abstract update(
    orderId: number,
    orderData: CreateOrderType
  ): Promise<OrderData>;
  abstract delete(orderId: number): Promise<void>;
}
