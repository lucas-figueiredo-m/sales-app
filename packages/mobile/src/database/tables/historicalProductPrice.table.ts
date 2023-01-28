import { HistoricalProductPriceColumns, Tables } from '@mobile/types';
import { ColumnType, tableSchema } from '@nozbe/watermelondb';

type HistoricalProductPriceTableColumnsType = {
  name: HistoricalProductPriceColumns;
  type: ColumnType;
};

const HistoricalProductPriceTableColumns: HistoricalProductPriceTableColumnsType[] =
  [
    { name: HistoricalProductPriceColumns.productId, type: 'number' },
    { name: HistoricalProductPriceColumns.price, type: 'number' },
    { name: HistoricalProductPriceColumns.createdAt, type: 'number' },
    { name: HistoricalProductPriceColumns.updatedAt, type: 'number' },
  ];

export const HistoricalProductPriceTable = tableSchema({
  name: Tables.HistoricalProductPrice,
  columns: HistoricalProductPriceTableColumns,
});
