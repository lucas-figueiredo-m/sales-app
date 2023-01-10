import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
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

  @Put()
  updateProduct(@Query('id') id: string, @Body() body: UpdateProductDto) {
    return this.products.update(parseInt(id), body);
  }

  @Delete()
  deleteProduct(@Query('id') id: string) {
    return this.products.delete(parseInt(id));
  }
}
