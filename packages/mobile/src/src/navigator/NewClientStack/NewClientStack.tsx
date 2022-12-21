import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  RegisterEmployeesScreen,
  RegisterMerchantScreen,
} from '@mobile/screens';
import { Colors } from '@mobile/theme';
import { ClientParams, ClientRoutes } from './NewClientTypes';

const Stack = createStackNavigator<ClientParams>();

const NewClientStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          flex: 1,
          backgroundColor: Colors.White,
        },
      }}
    >
      <Stack.Screen
        name={ClientRoutes.Merchant}
        component={RegisterMerchantScreen}
      />
      <Stack.Screen
        name={ClientRoutes.Employees}
        component={RegisterEmployeesScreen}
      />
    </Stack.Navigator>
  );
};

export default NewClientStack;
