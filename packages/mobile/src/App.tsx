import React from 'react';
import { StatusBar, View } from 'react-native';
// import {styles} from 'styles';
// import { createClientService } from 'services/Client/api';
// import { Client, columns, database, tables } from 'storage';
// import { ClientCard } from 'components';
import '@mobile/locales';
import { Router } from 'packages/mobile/src/navigator';
import Toast from 'react-native-toast-message';
import { toastConfig } from '@mobile/utils';
// const Clients = database.get<Client>(tables.client).query().observe()

const App: React.FC = () => {
  // const [count, setCount] = useState(0)

  // const retrieveData = async () => {
  //   // console.log('Test: ', columns.client)
  //   const list = await createClientService().list()

  //   // eslint-disable-next-line no-console
  //   console.log('list: ', list)
  // }

  // const onAdd = async () => {
  //   try {
  //     await createClientService().create({
  //       socialName: `Arthur ${count}`,
  //       document: '104.979.466-45'
  //     })
  //     setCount(prevCount => prevCount + 1)

  //   } catch (error) {
  //     console.log('Error: ', JSON.stringify(error))
  //   }
  // }

  // useEffect( () => {
  //   retrieveData()
  // }, [])

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Router />
      <Toast config={toastConfig} />
    </View>
  );

  // return (
  //   <SafeAreaView style={styles.root}>
  //     <StatusBar barStyle='dark-content' />
  //     <ScrollView>
  //       <ClientCard client={Clients} />
  //       <TouchableOpacity
  //         onPress={onAdd}
  //         style={styles.add}
  //       >
  //         <Text>ADD</Text>
  //       </TouchableOpacity>
  //     </ScrollView>

  //   </SafeAreaView>
  // );
};

export default App;
