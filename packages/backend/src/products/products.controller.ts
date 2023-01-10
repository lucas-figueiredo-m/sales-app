import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private products: ProductsService) {}

  @Post()
  createProduct(@Body() body: CreateProductDto) {
    return this.products.create(body);
  }

  @Get()
  getAllProducts(@Query('category') category: string) {
    return this.products.get(category);
  }
}
