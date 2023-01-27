import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { rootNavigationRef } from '@mobile/hooks';
import React from 'react';
import {
  AddOrderScreen,
  LoginScreen,
  SettingsScreen,
  SplashScreen,
} from 'packages/mobile/src/screens';
import { modalOptions } from './config';
import NewClientStack from './NewClientStack/NewClientStack';
import { MainRoutes, MainStackParams } from '@sales-app/types';
import { TabNavigator } from './TabNavigator/TabNavigator';

const Stack = createStackNavigator<MainStackParams>();

export const Router: React.FC = () => {
  return (
    <NavigationContainer ref={rootNavigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={MainRoutes.Splash} component={SplashScreen} />
        <Stack.Screen name={MainRoutes.Login} component={LoginScreen} />
        <Stack.Screen name={MainRoutes.Tabs} component={TabNavigator} />

        {/** // TODO: add a navigator instead of a group to handle in-modal navigation */}
        <Stack.Screen
          name={MainRoutes.AddClient}
          component={NewClientStack}
          options={modalOptions}
        />

        <Stack.Group screenOptions={modalOptions}>
          <Stack.Screen name={MainRoutes.AddOrder} component={AddOrderScreen} />
        </Stack.Group>
        <Stack.Screen
          options={{ headerShown: true }}
          name={MainRoutes.Settings}
          component={SettingsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
