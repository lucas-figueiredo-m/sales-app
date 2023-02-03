import { HttpService } from '../../Http';
import { database as watermelondb } from '@mobile/database';
import {
  synchronize,
  SyncPullArgs,
  SyncPushArgs,
} from '@nozbe/watermelondb/sync';
import {
  DatabaseChangeSet,
  SyncPullParams,
  SyncPullResult,
} from '@mobile/types';

class DatabaseClass {
  constructor(private http: typeof HttpService) {}
  database = watermelondb;

  async sync() {
    await synchronize({
      database: this.database,
      pullChanges: (args) => this.pullChanges(args),
      pushChanges: (args) => this.pushChanges(args),
      migrationsEnabledAtVersion: 1,
    });
  }

  private async processPullChanges() {
    return;
  }

  private async processPushChanges() {
    return;
  }
  // https://www.youtube.com/watch?v=dXrJKc4sULs
  // TODO: finish implementation
  // TODO: create endpoint
  private async pullChanges({
    lastPulledAt,
    migration,
    schemaVersion,
  }: SyncPullArgs): Promise<SyncPullResult> {
    const params = {
      lastPulledAt,
      schemaVersion,
      migration,
    };

    const response = await this.http.get<SyncPullResult, SyncPullParams>(
      '/sync',
      {
        params,
      }
    );
    const { changes, timestamp } = response;
    await this.processPullChanges();
    return response;
  }

  // https://www.youtube.com/watch?v=dXrJKc4sULs
  // TODO: finish implementation
  // TODO: create endpoint
  private async pushChanges({
    changes,
    lastPulledAt,
  }: SyncPushArgs): Promise<void> {
    await this.http.post<DatabaseChangeSet, void>('/sync', changes);
    this.processPushChanges();
  }
}

export const DatabaseService = new DatabaseClass(HttpService);
