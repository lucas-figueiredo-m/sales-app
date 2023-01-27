import React from 'react';
import { SafeAreaView } from 'react-native';
import { createThemedStyles, useThemedStyles } from '@mobile/hooks';
import { Settings } from '@sales-app/icons/index';
import { MenuItem } from './components';
import { MainRoutes, TabNavigation, TabRoutes } from '@sales-app/types';
import { useNavigation } from '@react-navigation/native';

type MenuNavigation = TabNavigation<TabRoutes.Menu>;

export const MenuScreen: React.FC = () => {
  const styles = useThemedStyles(themedStyles);

  const { navigate } = useNavigation<MenuNavigation>();

  return (
    <SafeAreaView style={styles.root}>
      <MenuItem
        label={'Configuracoes'}
        icon={Settings as unknown as string}
        onPress={() => navigate(MainRoutes.Settings)}
      />
    </SafeAreaView>
  );
};

const themedStyles = createThemedStyles(({ colors }) => ({
  root: {
    flex: 1,
  },
}));
