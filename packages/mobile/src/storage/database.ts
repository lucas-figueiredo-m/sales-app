import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { Client } from './Client';

import migrations from './migrations';
import { schema } from './schema';

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  jsi: true,
  onSetUpError: (error) => {
    console.warn('Error: ', error);
  },
});

export const database = new Database({
  adapter,
  modelClasses: [Client],
  // actionsEnabled: true
});

if (__DEV__) {
  // Import connectDatabases function and required DBDrivers
  const {
    connectDatabases,
    WatermelonDB,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
  } = require('react-native-flipper-databases');

  connectDatabases([
    new WatermelonDB(database), // Pass in database definition
  ]);
}
