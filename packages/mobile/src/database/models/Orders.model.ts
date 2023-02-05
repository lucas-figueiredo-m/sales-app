import { OrderColumns, Tables } from '@mobile/types';
import { Model } from '@nozbe/watermelondb';
import { date, field, readonly, text } from '@nozbe/watermelondb/decorators';

export class Orders extends Model {
  static table = Tables.Orders;

  @field(OrderColumns.serverId) server_id!: number;
  @field(OrderColumns.clientId) client_id: number;
  @field(OrderColumns.estimatedOrderPrice) estimated_order_price: number;
  @field(OrderColumns.orderTotalPrice) order_total_price!: number;
  @text(OrderColumns.status) status: string;

  @readonly @date(OrderColumns.createdAt) created_at: number;
  @readonly @date(OrderColumns.updatedAt) updated_at: number;
}
