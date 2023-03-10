import { appSchema } from '@nozbe/watermelondb';

import {
  ClientTable,
  ProductTable,
  OrderItemTable,
  OrderTable,
  HistoricalProductPriceTable,
} from '../tables';
import Config from 'react-native-config';

export const schema = appSchema({
  version: parseInt(Config.SCHEMA_VERSION),
  tables: [
    ClientTable,
    ProductTable,
    OrderItemTable,
    OrderTable,
    HistoricalProductPriceTable,
  ],
});
