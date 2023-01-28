import { OrderItemColumns, Tables } from '@mobile/types';
import { Model } from '@nozbe/watermelondb';
import { date, field, readonly, text } from '@nozbe/watermelondb/decorators';

export class OrderItems extends Model {
  static table = Tables.OrderItems;

  @field(OrderItemColumns.orderId) orderId: number;
  @field(OrderItemColumns.productId) productId: number;
  @field(OrderItemColumns.tablePrice) tablePrice: number;
  @field(OrderItemColumns.negotiatedPrice) negotiatedPrice: number;
  @field(OrderItemColumns.orderedWeightInGrams) orderedWeightInGrams: number;
  @field(OrderItemColumns.deliveredWeightInGrams)
  deliveredWeightInGrams!: number;
  @field(OrderItemColumns.estimatedProductTotalPrice)
  estimatedProductTotalPrice: number;
  @field(OrderItemColumns.productTotalPrice) productTotalPrice!: number;
  @text(OrderItemColumns.notes) notes!: string;

  @readonly @date(OrderItemColumns.createdAt) createdAt: number;
  @readonly @date(OrderItemColumns.updatedAt) updatedAt: number;
}
