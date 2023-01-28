import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { ClientService } from '@mobile/services';
import { ClientCard } from './components/ClientsCard';
import { ClientModel, database } from '@mobile/database';
import { Tables } from '@mobile/types';

const Clients = database.get<ClientModel>(Tables.Client).query().observe();

const styles = StyleSheet.create({
  add: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const ClientsScreen: React.FC = () => {
  const [count, setCount] = useState(0);

  const onAdd = async () => {
    try {
      await ClientService.create({
        companyName: `Arthur ${count}`,
        taxpayerId: '104.979.466-45',
        employeeId: 1,
        tradeName: `Lucas ${count}`,
        type: 'Test',
        buyerFirstName: 'Lucas',
        buyerLastName: 'Figueiredo',
        phone: '32991376622',
        address: 'Rua teste',
        number: '123',
        complement: 'Apt 303',
        zipCode: '36045120',
        active: true,
      });
      setCount((prevCount) => prevCount + 1);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  return (
    <View>
      <ScrollView>
        <ClientCard client={Clients} />
        <TouchableOpacity onPress={onAdd} style={styles.add}>
          <Text>ADD</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
