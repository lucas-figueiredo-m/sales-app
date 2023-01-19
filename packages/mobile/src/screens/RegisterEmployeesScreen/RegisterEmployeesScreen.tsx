import { useNavigation } from '@react-navigation/native';

import { Container, Header } from '@sales-app/ui-mobile';
import { ClientNavigationProp, ClientRoutes } from '@sales-app/types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '@mobile/theme';
import { EmployeeCard } from './components/EmployeeCard';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    backgroundColor: Colors.White,
    height: '100%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 15,
  },
});

export const RegisterEmployeesScreen: React.FC = () => {
  const { goBack } =
    useNavigation<ClientNavigationProp<ClientRoutes.Employees>>();
  return (
    <Container>
      <View style={styles.root}>
        <Header onLeftPress={goBack} label="screens.registerEmployees.title" />
        <EmployeeCard />
      </View>
    </Container>
  );
};
