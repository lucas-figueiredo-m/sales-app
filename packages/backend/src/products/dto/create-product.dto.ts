import { CreateProductType, ProductCategories } from '@sales-app/types';
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';
import { IsValidProductCategory } from '../../validators/product-category.validator';

export class CreateProductDto implements CreateProductType {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(99999)
  price: number;

  @IsNotEmpty()
  @IsValidProductCategory()
  category: ProductCategories;
}
