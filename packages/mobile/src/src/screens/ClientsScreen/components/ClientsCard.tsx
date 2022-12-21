import withObservables, { ObservableifyProps } from '@nozbe/with-observables';
import { Client as ClientDB } from '@mobile/models';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { createClientService } from '@mobile/services';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface Props {
  client: ClientDB[];
}

type InputProps = ObservableifyProps<Props, 'client'>;

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  root: {
    width: width * 0.9,
    height: 60,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },

  delete: {
    backgroundColor: Colors.DarkRed,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  deleteText: {
    fontWeight: '600',
    color: Colors.White,
  },
});

export const ClientCardToObserve: React.FC<Props> = ({ client }) => {
  const onDelete = async (id: string) => {
    try {
      await createClientService().delete(id);
    } catch (error) {
      console.log('Error: ', JSON.stringify(error));
    }
  };

  return (
    <>
      {client.map((cli, index) => (
        <View key={index} style={styles.root}>
          <View>
            <Text>
              <Text>Client name: </Text>
              <Text>{cli.socialName}</Text>
            </Text>
            <Text>
              <Text>Document: </Text>
              <Text>{cli.document}</Text>
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => onDelete(cli.id)}
            style={styles.delete}
          >
            <Text style={styles.deleteText}>DELETE</Text>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
};

const enhance = withObservables(['client'], ({ client }: InputProps) => ({
  client,
}));

export const ClientCard = enhance(ClientCardToObserve);
