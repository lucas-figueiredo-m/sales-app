import { CreateOrderType, UpdateOrderType, OrderData } from '@sales-app/types';

export abstract class OrdersInterface {
  abstract create(orderData: CreateOrderType): Promise<void>;
  abstract getById(orderId: number): Promise<OrderData>;
  abstract getClientOrders(clientId: number): Promise<OrderData[]>;
  abstract getEmployeeOrders(employeeId: number): Promise<OrderData[]>;
  abstract update(orderId: number, orderData: UpdateOrderType): Promise<void>;
  abstract delete(orderId: number): Promise<void>;
}
