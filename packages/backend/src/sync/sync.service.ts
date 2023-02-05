import {
  HistoricalProductPrice,
  Order,
  OrderItem,
  Product,
  SyncPullResult,
  TableChangeSet,
} from '@mobile/types';
import { Injectable } from '@nestjs/common';
import { Client } from '@mobile/types';
import { PrismaService } from '../services/prisma.service';

const selectClients = {
  server_id: true,
  id: true,
  employee_id: true,
  company_name: true,
  trade_name: true,
  taxpayer_id: true,
  buyer_first_name: true,
  buyer_last_name: true,
  type: true,
  phone: true,
  address: true,
  complement: true,
  number: true,
  zip_code: true,
  active: true,
  created_at: true,
  updated_at: true,
};

const selectHistoricalProductPrice = {
  server_id: true,
  id: true,
  product_id: true,
  price: true,
  created_at: true,
  updated_at: true,
};

const selectProducts = {
  server_id: true,
  id: true,
  price: true,
  type: true,
  name: true,
  category: true,
  created_at: true,
  updated_at: true,
};

@Injectable()
export class SyncService {
  constructor(private prisma: PrismaService) {}
  private async fetchClientChanges(
    employee_id: number,
    lastPulledAt?: number | null
  ): Promise<TableChangeSet<Client>> {
    const newClients = await this.prisma.client.findMany({
      where: {
        employee_id,
        created_at: {
          gte: new Date(lastPulledAt ? lastPulledAt : 0),
        },
      },
      select: selectClients,
    });
    const updatedClients = await this.prisma.client.findMany({
      where: {
        employee_id,
        updated_at: {
          gte: new Date(lastPulledAt ? lastPulledAt : 0),
        },
      },
      select: selectClients,
    });

    return {
      created: newClients,
      updated: updatedClients,
      deleted: [],
    };
  }

  private async fetchHistoricalProductPriceChanges(
    lastPulledAt?: number | null
  ): Promise<TableChangeSet<HistoricalProductPrice>> {
    const newHistoricalProductPrices =
      await this.prisma.historicalProductPrice.findMany({
        where: {
          created_at: {
            gte: new Date(lastPulledAt ? lastPulledAt : 0),
          },
        },
        select: selectHistoricalProductPrice,
      });

    return {
      created: newHistoricalProductPrices,
      updated: [],
      deleted: [],
    };
  }

  private async fetchProductsChanges(
    lastPulledAt?: number | null
  ): Promise<TableChangeSet<Product>> {
    const newProducts = await this.prisma.products.findMany({
      where: {
        created_at: {
          gte: new Date(lastPulledAt ? lastPulledAt : 0),
        },
      },
      select: selectProducts,
    });

    const updatedProducts = await this.prisma.products.findMany({
      where: {
        updated_at: {
          gte: new Date(lastPulledAt ? lastPulledAt : 0),
        },
      },
      select: selectProducts,
    });

    return {
      created: newProducts,
      updated: updatedProducts,
      deleted: [],
    };
  }

  private async fetchOrdersChanges(
    employee_id: number,
    lastPulledAt?: number | null
  ): Promise<{
    Orders: TableChangeSet<Order>;
    OrderItems: TableChangeSet<OrderItem>;
  }> {
    const newOrders = await this.prisma.orders.findMany({
      where: {
        client: {
          employee_id,
        },
        created_at: {
          gte: new Date(lastPulledAt ? lastPulledAt : 0),
        },
      },
      include: {
        order_items: true,
        client: true,
      },
    });

    const newOrderItems = newOrders.reduce(
      (prev, curr) => [...prev, ...curr.order_items],
      []
    );

    const updatedOrders = await this.prisma.orders.findMany({
      where: {
        client: {
          employee_id,
        },
        created_at: {
          gte: new Date(lastPulledAt ? lastPulledAt : 0),
        },
      },
      include: {
        order_items: true,
      },
    });

    const updatedOrderItems = updatedOrders.reduce(
      (prev, curr) => [...prev, ...curr.order_items],
      []
    );

    const Orders: TableChangeSet<Order> = {
      created: newOrders,
      updated: updatedOrders,
      deleted: [],
    };

    const OrderItems: TableChangeSet<OrderItem> = {
      created: newOrderItems,
      updated: updatedOrderItems,
      deleted: [],
    };

    return {
      Orders,
      OrderItems,
    };
  }

  async getSyncChanges(
    employee_id: number,
    lastPulledAt?: number | null
  ): Promise<SyncPullResult> {
    const Client = await this.fetchClientChanges(employee_id, lastPulledAt);
    const HistoricalProductPrice =
      await this.fetchHistoricalProductPriceChanges(lastPulledAt);
    const Products = await this.fetchProductsChanges(lastPulledAt);
    const { Orders, OrderItems } = await this.fetchOrdersChanges(
      employee_id,
      lastPulledAt
    );

    return {
      timestamp: Date.now(),
      changes: {
        Client,
        HistoricalProductPrice,
        Products,
        Orders,
        OrderItems,
      },
    };
  }
}
