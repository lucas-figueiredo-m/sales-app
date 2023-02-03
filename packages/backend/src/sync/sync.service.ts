import { SyncPullResult, TableChangeSet } from '@mobile/types';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class SyncService {
  constructor(private prisma: PrismaService) {}
  private async fetchClientChanges(
    employee_id: number,
    lastPulledAt?: number | null
  ): Promise<TableChangeSet> {
    const newClients = await this.prisma.client.findMany({
      where: {
        employee_id,
        created_at: {
          gte: new Date(lastPulledAt ? lastPulledAt : 0),
        },
      },
    });

    return {
      created: newClients,
      deleted: [],
      updated: [],
    };
  }

  async getSyncChanges(
    employee_id: number,
    lastPulledAt?: number | null
  ): Promise<SyncPullResult> {
    const Client = await this.fetchClientChanges(employee_id, lastPulledAt);
    const changedData = {
      created: [],
      deleted: [],
      updated: [],
    };
    console.log('here');
    return {
      timestamp: Date.now(),
      changes: {
        Client,
        HistoricalProductPrice: changedData,
        OrderItems: changedData,
        Orders: changedData,
        Products: changedData,
      },
    };
  }
}
