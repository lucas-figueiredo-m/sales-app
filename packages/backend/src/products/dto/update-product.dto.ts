import { CreateProductType, ProductCategories } from '@sales-app/types';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { IsValidClientType } from '../../validators';
import { IsValidProductCategory } from '../../validators/product-category.validator';

export class UpdateProductDto implements CreateProductType {
  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsOptional()
  price: number;

  @IsOptional()
  @IsValidClientType()
  type: string;

  @IsValidProductCategory()
  @IsOptional()
  category: ProductCategories;
}
