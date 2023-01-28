import { HistoricalProductPriceColumns, Tables } from '@mobile/types';
import { Model } from '@nozbe/watermelondb';
import { date, field, readonly } from '@nozbe/watermelondb/decorators';

export class HistoricalProductPrice extends Model {
  static table = Tables.HistoricalProductPrice;

  @field(HistoricalProductPriceColumns.productId) productId: number;
  @field(HistoricalProductPriceColumns.price) price: number;
  @readonly @date(HistoricalProductPriceColumns.createdAt) createdAt: number;
  @readonly @date(HistoricalProductPriceColumns.updatedAt) updatedAt: number;
}
