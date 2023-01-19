import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Label, SVG } from '@sales-app/ui-mobile';
import {
  Home,
  Menu,
  People,
  UserAdd,
  Document,
} from 'packages/mobile/src/assets/icons/index';
import React from 'react';
import {
  ClientsScreen,
  HomeScreen,
  MenuScreen,
  OrdersScreen,
} from 'packages/mobile/src/screens';
import { TabParams, TabRoutes } from './TabTypes';

import { TabBar } from './components/TabBar';
import { Colors } from '@mobile/theme';
import { useTranslation, useRootNavigator, useTheme } from '@mobile/hooks';
import { Pressable, StyleSheet } from 'react-native';
import { defaultHitSlop } from 'packages/mobile/src/constants';
import { ModalRoutes } from '@sales-app/types';

const styles = StyleSheet.create({
  rightButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 5,
    marginRight: 15,
  },
});

const Tab = createBottomTabNavigator<TabParams>();

// https://www.youtube.com/watch?v=bNuwwkgRQOk
// https://reactnavigation.org/docs/bottom-tab-navigator#tabbar

export const TabNavigator: React.FC = () => {
  const t = useTranslation();
  const rootNavigator = useRootNavigator();
  const { Font } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.Flame,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen
        name={TabRoutes.Home}
        component={HomeScreen}
        options={{
          tabBarLabel: t('tabNames.home'),
          tabBarIcon: ({ color }) => (
            <SVG xml={Home as undefined as string} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={TabRoutes.Clients}
        component={ClientsScreen}
        options={{
          tabBarLabel: t('tabNames.clients'),
          headerTitle: t('tabNames.clients'),
          headerShown: true,
          headerRight: () => (
            <Pressable
              onPress={() => rootNavigator.navigate(ModalRoutes.AddClient)}
              hitSlop={defaultHitSlop}
              style={styles.rightButtonContainer}
            >
              <Label.H4
                t="clients.new"
                style={[{ color: Colors.Flame }, Font.transform.uppercase]}
              />
              <SVG
                xml={UserAdd as undefined as string}
                style={styles.icon}
                width={20}
                height={20}
                color={Colors.Flame}
              />
            </Pressable>
          ),
          tabBarIcon: ({ color }) => (
            <SVG xml={People as undefined as string} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={TabRoutes.Orders}
        component={OrdersScreen}
        options={{
          tabBarLabel: t('tabNames.orders'),
          tabBarIcon: ({ color }) => (
            <SVG xml={Document as undefined as string} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={TabRoutes.Menu}
        component={MenuScreen}
        options={{
          tabBarLabel: t('tabNames.menu'),
          tabBarIcon: ({ color }) => (
            <SVG xml={Menu as undefined as string} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
