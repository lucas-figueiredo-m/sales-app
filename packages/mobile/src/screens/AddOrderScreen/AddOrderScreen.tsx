import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { StyleSheet, View } from 'react-native';
import { Colors } from '@mobile/theme';
import { Container, Header } from '@sales-app/ui-mobile';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    backgroundColor: Colors.White,
    maxHeight: '100%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 15,
  },
});

export const AddOrderScreen: React.FC = () => {
  const { goBack } = useNavigation();
  return (
    <Container>
      <View style={styles.root}>
        <Header onLeftPress={goBack} label="modal.newOrder.title" />
        <View style={{ height: 100 }} />
      </View>
    </Container>
  );
};
