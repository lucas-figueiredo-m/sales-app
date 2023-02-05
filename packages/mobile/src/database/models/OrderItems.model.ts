import { OrderItemColumns, Tables } from '@mobile/types';
import { Model } from '@nozbe/watermelondb';
import { date, field, readonly, text } from '@nozbe/watermelondb/decorators';

export class OrderItems extends Model {
  static table = Tables.OrderItems;

  @field(OrderItemColumns.serverId) server_id!: number;
  @field(OrderItemColumns.orderId) order_id: number;
  @field(OrderItemColumns.productId) product_id: number;
  @field(OrderItemColumns.tablePrice) table_price: number;
  @field(OrderItemColumns.negotiatedPrice) negotiated_price: number;
  @field(OrderItemColumns.orderedWeightInGrams) ordered_weight_in_grams: number;
  @field(OrderItemColumns.deliveredWeightInGrams)
  delivered_weight_in_grams!: number;
  @field(OrderItemColumns.estimatedProductTotalPrice)
  estimated_product_total_price: number;
  @field(OrderItemColumns.productTotalPrice) product_totalPrice!: number;
  @text(OrderItemColumns.notes) notes!: string;

  @readonly @date(OrderItemColumns.createdAt) created_at: number;
  @readonly @date(OrderItemColumns.updatedAt) updated_at: number;
}
