import { NavigatorScreenParams } from '@react-navigation/native'
import { TabParams } from './TabNavigator/TabTypes'

export enum MainRoutes {
  Tabs = 'Tabs'
}

export enum ModalRoutes {
  AddClient = 'AddClient',
  AddOrder = 'AddOrder'
}

export type MainStackParams = {
  [MainRoutes.Tabs]: NavigatorScreenParams<TabParams>
  [ModalRoutes.AddClient]: undefined
  [ModalRoutes.AddOrder]: undefined
}
