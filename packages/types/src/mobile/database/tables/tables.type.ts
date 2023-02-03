import { Tables } from './tables.enum';
import { Migration } from '@nozbe/watermelondb/Schema/migrations';

export type Id = string;
export type Timestamp = number;
export type Raw = { id: Id };
export type TableChangeSet = {
  created: any[];
  updated: any[];
  deleted: any[];
};

export type DatabaseChangeSetPrototype = {
  [table in Tables]: TableChangeSet;
};

export type DatabaseChangeSet = Partial<DatabaseChangeSetPrototype>;

export type SyncPullResult = {
  changes: DatabaseChangeSet;
  timestamp: Timestamp;
};

export type SyncPushResult = SyncPullResult;

export type SyncPullParams = {
  lastPulledAt: number;
  migration?: Migration | null;
  schemaVersion?: number;
};
