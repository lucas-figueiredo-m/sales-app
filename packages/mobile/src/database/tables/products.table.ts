import { ColumnType, tableSchema } from '@nozbe/watermelondb';
import { Tables, ProductColumns } from '@mobile/types';

type ProductTableColumnsType = {
  name: ProductColumns;
  type: ColumnType;
};

const ProductTableColumns: ProductTableColumnsType[] = [
  { name: ProductColumns.name, type: 'string' },
  { name: ProductColumns.price, type: 'number' },
  { name: ProductColumns.category, type: 'string' },
  { name: ProductColumns.type, type: 'string' },
  { name: ProductColumns.createdAt, type: 'string' },
  { name: ProductColumns.updatedAt, type: 'string' },
];

export const ProductTable = tableSchema({
  name: Tables.Products,
  columns: ProductTableColumns,
});
