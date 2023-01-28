import { ColumnType, tableSchema } from '@nozbe/watermelondb';
import { Tables, ClientColumns } from '@mobile/types';

type ClientTableColumnsType = {
  name: ClientColumns;
  type: ColumnType;
};

const ClientTableColumns: ClientTableColumnsType[] = [
  { name: ClientColumns.employeeId, type: 'number' },
  { name: ClientColumns.companyName, type: 'string' },
  { name: ClientColumns.tradeName, type: 'string' },
  { name: ClientColumns.taxpayerId, type: 'string' },
  { name: ClientColumns.type, type: 'string' },
  { name: ClientColumns.buyerFirstName, type: 'string' },
  { name: ClientColumns.buyerLastName, type: 'string' },
  { name: ClientColumns.phone, type: 'string' },
  { name: ClientColumns.address, type: 'string' },
  { name: ClientColumns.number, type: 'string' },
  { name: ClientColumns.complement, type: 'string' },
  { name: ClientColumns.zipCode, type: 'string' },
  { name: ClientColumns.createdAt, type: 'string' },
  { name: ClientColumns.updatedAt, type: 'string' },
  { name: ClientColumns.active, type: 'boolean' },
];

export const ClientTable = tableSchema({
  name: Tables.Client,
  columns: ClientTableColumns,
});