import { OrderStatus } from './orders.enum';

export type CreateOrderProductType = {
  productId: number;
  negotiatedPrice: number;
  grams: number;
};

export type CreateOrderType = {
  clientId: number;
  products: CreateOrderProductType[];
};

export type OrderData = {
  id: number;
  clientId: number;
  status: OrderStatus;
  products: {
    productId: number;
    productName: string;
    negotiatedPrice: number;
    grams: number;
  };
};
