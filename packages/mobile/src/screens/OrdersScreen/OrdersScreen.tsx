import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Orders } from '@mobile/services';
import { OrderData } from '@sales-app/types';

export const OrdersScreen: React.FC = () => {
  const [orders, setOrders] = useState<OrderData[]>([]);

  const getOrders = async () => {
    const response = await Orders.getAll();
    setOrders(response);
  };

  useEffect(() => {
    getOrders();
  }, []);
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={getOrders}
        style={{ backgroundColor: 'red', width: 50, height: 50 }}
      >
        <Text>Orders</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
