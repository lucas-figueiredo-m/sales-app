import { Injectable } from '@nestjs/common';
import { OrderItems, Orders } from '@prisma/client';
import { CreateOrderType, OrderData, OrderStatus } from '@sales-app/types';
import { PrismaService } from '../services/prisma.service';
import { OrdersInterface } from './interfaces';

@Injectable()
export class OrdersService implements OrdersInterface {
  constructor(private prisma: PrismaService) {}
  async create(orderData: CreateOrderType): Promise<void> {
    const order = await this.prisma.orders.create({
      data: {
        clientId: orderData.clientId,
        status: OrderStatus.created,
      },
    });

    const productPrices = await this.prisma.products.findMany({
      where: {
        OR: orderData.products.map((product) => ({
          id: product.productId,
        })),
      },
    });

    await this.prisma.orderItems.createMany({
      data: orderData.products.map((product) => ({
        orderId: order.id,
        productId: product.productId,
        negotiatedPrice: product.negotiatedPrice,
        grams: product.grams,
        tablePrice: productPrices.find(
          (productPrice) => productPrice.id === product.productId
        ).price,
      })),
    });
  }
  async getById(
    orderId: number
  ): Promise<Orders & { OrderItems: OrderItems[] }> {
    return await this.prisma.orders.findFirst({
      where: {
        id: orderId,
      },
      include: {
        OrderItems: true,
      },
    });
  }
  update(orderId: number, orderData: CreateOrderType): Promise<OrderData> {
    throw new Error('Method not implemented.');
  }
  delete(orderId: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
