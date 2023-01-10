import { Products } from '@prisma/client';
import { CreateProductType } from '@sales-app/types';

export abstract class ProductsInterface {
  abstract create(productData): Promise<Products>;
  abstract get(category: string): Promise<Products[]>;
  abstract update(
    productId: number,
    attr: Partial<CreateProductType>
  ): Promise<Products>;
  abstract delete(productId: number): Promise<void>;
}
