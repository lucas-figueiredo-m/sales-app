import { OrderData } from '@sales-app/types';
import { HttpService } from '../HttpService';

type GetAllOrdersParams = {
  id: number;
};

class OrdersClass {
  constructor(private http: typeof HttpService) {}

  async getAll(): Promise<OrderData[]> {
    const params = {
      id: this.http.id,
    };

    const orders = await this.http.get<OrderData[], GetAllOrdersParams>(
      '/orders/client',
      { params }
    );

    return orders;
  }
}

export const Orders = new OrdersClass(HttpService);
