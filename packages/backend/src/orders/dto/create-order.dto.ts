import { CreateOrderProductType, CreateOrderType } from '@sales-app/types';
import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderDto implements CreateOrderType {
  @IsNotEmpty()
  @IsNumber()
  clientId: number;

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  products: CreateOrderProductDto[];
}

export class CreateOrderProductDto implements CreateOrderProductType {
  @IsNotEmpty()
  @IsNumber()
  productId: number;

  @IsNotEmpty()
  @IsNumber()
  negotiatedPrice: number;

  @IsNotEmpty()
  @IsNumber()
  orderedWeightInGrams: number;
}
