import { Model } from '@nozbe/watermelondb';
import { Tables } from '../schema';
import { date, field, readonly, text } from '@nozbe/watermelondb/decorators';

export enum ColumnClient {
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

export class Client extends Model {
  static table = Tables.Client;

  @field(ColumnClient.socialName) socialName!: string;

  // @text (ColumnClient.fantasyName) fantasyName!: string

  @text(ColumnClient.document) document!: string;

  // @text (ColumnClient.address) address!: string

  // @text (ColumnClient.number) number!: string

  // @text (ColumnClient.complement) complement!: string

  // @text (ColumnClient.zipCode) zipCode!: string

  // @text (ColumnClient.phone) phone!: string

  @readonly @date(ColumnClient.createdAt) createdAt!: Date;

  @readonly @date(ColumnClient.updatedAt) updatedAt!: Date;
}
