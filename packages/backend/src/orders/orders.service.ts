import { Injectable } from '@nestjs/common';
import {
  UpdateOrderProductType,
  CreateOrderType,
  OrderData,
  OrderStatus,
  UpdateOrderType,
} from '@sales-app/types';
import { PrismaService } from '../services/prisma.service';
import { OrdersInterface } from './interfaces';

@Injectable()
export class OrdersService extends OrdersInterface {
  constructor(private prisma: PrismaService) {
    super();
  }

  protected async getProductsPriceListById(productIdList: { id: number }[]) {
    return await this.prisma.products.findMany({
      where: {
        OR: productIdList,
      },
      select: {
        id: true,
        price: true,
      },
    });
  }

  protected async processOrderData(orderData: UpdateOrderProductType[]) {
    const productPriceList = await this.getProductsPriceListById(
      orderData.map((product) => ({
        id: product.productId,
      }))
    );

    return orderData.map((product) => ({
      ...(product.id && { id: product.id }),
      ...(product.notes && { notes: product.notes }),
      productId: product.productId,
      negotiatedPrice: product.negotiatedPrice,
      orderedWeightInGrams: product.orderedWeightInGrams,
      tablePrice: productPriceList.find(
        (productPrice) => productPrice.id === product.productId
      ).price,
      estimatedProductTotalPrice:
        (product.negotiatedPrice * product.orderedWeightInGrams) / 1000,
    }));
  }

  async create(orderData: CreateOrderType): Promise<void> {
    const processedOrderData = await this.processOrderData(orderData.products);

    const order = await this.prisma.orders.create({
      data: {
        clientId: orderData.clientId,
        status: OrderStatus.created,
        estimatedOrderPrice: processedOrderData.reduce(
          (prev, curr) => prev + curr.estimatedProductTotalPrice,
          0
        ),
      },
    });

    await this.prisma.orderItems.createMany({
      data: processedOrderData.map((processedProduct) => ({
        ...processedProduct,
        orderId: order.id,
      })),
    });
  }
  async getById(orderId: number): Promise<OrderData> {
    return await this.prisma.orders.findFirst({
      where: {
        id: orderId,
      },
      include: {
        OrderItems: true,
        client: true,
      },
    });
  }

  async getClientOrders(clientId: number): Promise<OrderData[]> {
    return await this.prisma.orders.findMany({
      where: {
        clientId,
      },
      include: {
        OrderItems: true,
        client: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getEmployeeOrders(employeeId: number): Promise<OrderData[]> {
    return await this.prisma.orders.findMany({
      where: {
        client: {
          employeeId,
        },
      },
      include: {
        OrderItems: true,
        client: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async update(orderId: number, orderData: UpdateOrderType): Promise<void> {
    const processedOrderData = await this.processOrderData(orderData.products);

    const orderItemsToUpdate = processedOrderData.filter((order) => !!order.id);
    const orderItemsToCreate = processedOrderData.filter((order) => !order.id);

    await this.prisma.$transaction([
      ...orderItemsToUpdate.map((product) =>
        this.prisma.orderItems.update({
          where: {
            id: product.id,
          },
          data: {
            negotiatedPrice: product.negotiatedPrice,
            orderedWeightInGrams: product.orderedWeightInGrams,
            estimatedProductTotalPrice:
              (product.negotiatedPrice * product.orderedWeightInGrams) / 1000,
            notes: product.notes,
          },
        })
      ),
      this.prisma.orderItems.createMany({
        data: orderItemsToCreate.map((newOrder) => ({ ...newOrder, orderId })),
      }),
    ]);

    const sum = await this.prisma.orderItems.aggregate({
      _sum: {
        estimatedProductTotalPrice: true,
      },
      where: {
        orderId,
      },
    });

    await this.prisma.orders.update({
      where: { id: orderId },
      data: { estimatedOrderPrice: sum._sum.estimatedProductTotalPrice },
    });
  }
  async delete(orderId: number): Promise<void> {
    await this.prisma.orders.delete({
      where: {
        id: orderId,
      },
    });
  }
}
