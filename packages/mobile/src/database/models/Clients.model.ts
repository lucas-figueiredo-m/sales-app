import { Model } from '@nozbe/watermelondb';
import { date, field, readonly, text } from '@nozbe/watermelondb/decorators';

import { Tables, ClientColumns } from '@mobile/types';

export class ClientModel extends Model {
  static table = Tables.Client;

  @field(ClientColumns.employeeId) employeeId: number;
  @text(ClientColumns.companyName) companyName: string;
  @text(ClientColumns.tradeName) tradeName: string;
  @text(ClientColumns.taxpayerId) taxpayerId: string;
  @field(ClientColumns.type) type: string;
  @text(ClientColumns.buyerFirstName) buyerFirstName: string;
  @text(ClientColumns.buyerLastName) buyerLastName: string;
  @text(ClientColumns.phone) phone: string;
  @text(ClientColumns.address) address: string;
  @field(ClientColumns.number) number: string;
  @text(ClientColumns.complement) complement!: string;
  @text(ClientColumns.zipCode) zipCode: string;
  @field(ClientColumns.active) active: boolean;
  @readonly @date(ClientColumns.createdAt) createdAt: number;
  @readonly @date(ClientColumns.updatedAt) updatedAt: number;
}
