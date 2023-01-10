import { ProductCategories } from './products.enum';

export type CreateProductType = {
  name: string;
  price: number;
  category: ProductCategories;
};
