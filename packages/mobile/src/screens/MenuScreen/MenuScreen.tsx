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
      <MenuItem
        label={'Tabela Bovino'}
        icon={Settings as unknown as string}
        onPress={() => navigate(MainRoutes.BovineTable)}
      />
      <MenuItem
        label={'Tabela Suíno'}
        icon={Settings as unknown as string}
        onPress={() => navigate(MainRoutes.SwineTable)}
      />
      <MenuItem
        label={'Tabela Miúdos'}
        icon={Settings as unknown as string}
        onPress={() => navigate(MainRoutes.GibletTable)}
      />
    </SafeAreaView>
  );
};

const themedStyles = createThemedStyles(({ colors }) => ({
  root: {
    flex: 1,
  },
}));
