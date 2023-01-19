import { CreateProductType, ProductCategories } from '@sales-app/types';
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';
import { IsValidClientType } from '../../validators';
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
  @IsValidClientType()
  type: string;

  @IsNotEmpty()
  @IsValidProductCategory()
  category: ProductCategories;
}
