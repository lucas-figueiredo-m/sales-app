import { appSchema, tableSchema } from '@nozbe/watermelondb';
// import { ColumnClient } from '@mobile/storage';

export enum Tables {
  Client = 'client',
}

enum ColumnClient {
  socialName = 'social_name',
  fantasyName = 'fantasyName',
  document = 'document',
  phone = 'phone',
  address = 'address',
  number = 'number',
  complement = 'complement',
  zipCode = 'zipCode',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

// TODO: Create the ClientColumns enum

export const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: Tables.Client,
      columns: [
        { name: ColumnClient.socialName, type: 'string' },
        // { name: columns.client.fantasyName, type: 'string'},
        { name: ColumnClient.document, type: 'string' },
        // { name: columns.client.address, type: 'number'},
        // { name: columns.client.number, type: 'string'},
        // { name: columns.client.complement, type: 'string'},
        // { name: columns.client.zipCode, type: 'number'},
        // { name: columns.client.phone, type: 'number'},
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
  ],
});
