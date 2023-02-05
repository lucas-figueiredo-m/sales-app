import React from 'react';
import { View } from 'react-native';
import { ClientCardList } from './components/ClientsCard';
import { ClientModel, database } from '@mobile/database';
import { Tables } from '@mobile/types';

const Clients = database.get<ClientModel>(Tables.Client).query().observe();

export const ClientsScreen: React.FC = () => {
  return (
    <View>
      <ClientCardList clients={Clients} />
    </View>
  );
};
