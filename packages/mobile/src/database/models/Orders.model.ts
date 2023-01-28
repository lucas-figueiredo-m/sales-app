import { OrderColumns, Tables } from '@mobile/types';
import { Model } from '@nozbe/watermelondb';
import { date, field, readonly, text } from '@nozbe/watermelondb/decorators';

export class Orders extends Model {
  static table = Tables.Orders;

  @field(OrderColumns.clientId) clientId: number;
  @field(OrderColumns.estimatedOrderPrice) estimatedOrderPrice: number;
  @field(OrderColumns.orderTotalPrice) orderTotalPrice!: number;
  @text(OrderColumns.status) status: string;

  @readonly @date(OrderColumns.createdAt) createdAt: number;
  @readonly @date(OrderColumns.updatedAt) updatedAt: number;
}
