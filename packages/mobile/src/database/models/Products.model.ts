import { Model } from '@nozbe/watermelondb';
import { date, field, readonly, text } from '@nozbe/watermelondb/decorators';

import { Tables, ProductColumns } from '@mobile/types';

export class ProductModel extends Model {
  static table = Tables.Products;

  @field(ProductColumns.name) name!: string;
  @text(ProductColumns.serverId) server_id!: number;
  @text(ProductColumns.price) price!: number;
  @text(ProductColumns.category) category!: string;
  @text(ProductColumns.type) type!: string;
  @readonly @date(ProductColumns.createdAt) created_at: number;
  @readonly @date(ProductColumns.updatedAt) updated_at: number;
}
