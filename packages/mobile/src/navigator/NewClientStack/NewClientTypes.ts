import { StackNavigationProp } from '@react-navigation/stack'

export enum ClientRoutes {
  Merchant = 'Merchant',
  Employees = 'Employees'
}

export type ClientParams = {
  [ClientRoutes.Merchant]: undefined
  [ClientRoutes.Employees]: undefined
}

export type ClientNavigationProp<T extends ClientRoutes> = StackNavigationProp<ClientParams, T>

export type MerchantNavigationProp = StackNavigationProp<ClientParams, ClientRoutes.Merchant>
