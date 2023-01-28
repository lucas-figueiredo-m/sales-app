import { Model } from '@nozbe/watermelondb';
import { date, field, readonly, text } from '@nozbe/watermelondb/decorators';

import { Tables, ProductColumns } from '@mobile/types';

export class ProductModel extends Model {
  static table = Tables.Products;

  @field(ProductColumns.name) name!: string;
  @text(ProductColumns.price) price!: number;
  @text(ProductColumns.category) category!: string;
  @text(ProductColumns.type) type!: string;
  @readonly @date(ProductColumns.createdAt) createdAt!: Date; // TODO: Fix it
  @date(ProductColumns.updatedAt) updatedAt!: Date; // TODO: Fix it
}