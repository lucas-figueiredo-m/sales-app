import { SyncPullResult, SyncPushResult } from '@mobile/types';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DecodedJwt } from '@sales-app/types';
import { CurrentEmployee } from '../decorators/current-employee.decorator';
import { SyncService } from './sync.service';

@Controller('sync')
export class SyncController {
  constructor(private syncService: SyncService) {}

  @Get()
  sendChangesFromRemoteToLocal(
    @Query('lastPulledAt') lastPulledAt: string | null,
    @Query('migration') migration: any,
    @Query('schemaVersion') schemaVersion: number | null,
    @CurrentEmployee() employee: DecodedJwt
  ) {
    return this.syncService.getSyncChanges(
      employee.employee_id,
      parseInt(lastPulledAt)
    );
  }

  @Post()
  receiveChangesFromLocalToRemote(
    @Query('lastPulledAt') lastPulledAt: string | null,
    @Body() body: SyncPushResult
  ) {
    return;
  }
}
