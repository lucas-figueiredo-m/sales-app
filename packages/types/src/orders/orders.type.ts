import { Client, OrderItems, Orders } from '@prisma/client';

export type CreateOrderProductType = {
  productId: number;
  negotiatedPrice: number;
  orderedWeightInGrams: number;
  notes?: string;
};

export type UpdateOrderProductType = {
  id?: number;
  notes?: string;
  productId: number;
  negotiatedPrice: number;
  orderedWeightInGrams: number;
};

export type CreateOrderType = {
  clientId: number;
  products: CreateOrderProductType[];
};

export type UpdateOrderType = {
  products: UpdateOrderProductType[];
};

export type OrderData = Orders & { OrderItems: OrderItems[]; client: Client };

export type ProcessedOrderDataType = UpdateOrderProductType & {
  tablePrice: number;
  estimatedProductTotalPrice: number;
};
