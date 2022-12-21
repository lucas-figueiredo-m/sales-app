import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { createClientService } from '@mobile/services';
import { Client, database, tables } from '@mobile/storage';
import { ClientCard } from './components/ClientsCard';

const Clients = database.get<Client>(tables.client).query().observe();

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
      await createClientService().create({
        socialName: `Arthur ${count}`,
        document: '104.979.466-45',
      });
      setCount((prevCount) => prevCount + 1);
    } catch (error) {
      return;
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
