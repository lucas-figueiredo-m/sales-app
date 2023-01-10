import { Injectable } from '@nestjs/common';
import { Products } from '@prisma/client';
import { CreateProductType } from '@sales-app/types';
import { PrismaService } from '../services/prisma.service';
import { ProductsInterface } from './products.interface';

@Injectable()
export class ProductsService implements ProductsInterface {
  constructor(private prisma: PrismaService) {}

  async create(productData: CreateProductType): Promise<Products> {
    return await this.prisma.products.create({
      data: {
        ...productData,
      },
    });
  }

  async get(category: string): Promise<Products[]> {
    return await this.prisma.products.findMany({ where: { category } });
  }

  async update(productId: number, price: number): Promise<Products> {
    return await this.prisma.products.update({
      where: {
        id: productId,
      },
      data: {
        price,
      },
    });
  }

  async delete(productId: number): Promise<void> {
    await this.prisma.products.delete({ where: { id: productId } });
  }
}
