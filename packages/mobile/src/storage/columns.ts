import { columnName } from '@nozbe/watermelondb'
import { ColumnClient } from './Client'

export const columns = {
  client: {
    socialName: columnName(ColumnClient.socialName),
    // fantasyName: columnName(ColumnClient.fantasyName),
    document: columnName(ColumnClient.document),
    // phone: columnName(ColumnClient.phone),
    // address: columnName(ColumnClient.address),
    // number: columnName(ColumnClient.number),
    // complement: columnName(ColumnClient.complement),
    // zipCode: columnName(ColumnClient.zipCode),
    createdAt: columnName(ColumnClient.createdAt),
    updatedAt: columnName(ColumnClient.updatedAt)
  }
}
