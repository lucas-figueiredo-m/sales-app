import { Products } from '@prisma/client';

export abstract class ProductsInterface {
  abstract create(productData): Promise<Products>;
  abstract get(category: string): Promise<Products[]>;
  abstract update(productId: number, price: number): Promise<Products>;
  abstract delete(productId: number): Promise<void>;
}
