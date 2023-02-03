import { ClientModel, database } from '@mobile/database';
import type { Client, ClientWithoutId } from '@mobile/types';
import { Tables } from '@mobile/types';
import { ClientAbstract } from './Client.abstract';

class ClientClass implements ClientAbstract {
  async list(): Promise<Client[]> {
    const entries = await database
      .get<ClientModel>(Tables.Client)
      .query()
      .fetch();
    if (entries.length) {
      return entries.map<Client>((entry) => ({
        id: entry.id,
        employee_id: entry.employee_id,
        companyName: entry.companyName,
        tradeName: entry.tradeName,
        taxpayerId: entry.taxpayerId,
        type: entry.type,
        buyerFirstName: entry.buyerFirstName,
        buyerLastName: entry.buyerLastName,
        phone: entry.phone,
        address: entry.address,
        number: entry.number,
        complement: entry.complement,
        zipCode: entry.zipCode,
        active: entry.active,
      }));
    }
    return [];
  }
  async get(id: string): Promise<Client> {
    const entry = await database
      .get<ClientModel>(Tables.Client)
      .find(String(id));
    const formattedEntry: Client = {
      id: entry.id,
      employee_id: entry.employee_id,
      companyName: entry.companyName,
      tradeName: entry.tradeName,
      taxpayerId: entry.taxpayerId,
      type: entry.type,
      buyerFirstName: entry.buyerFirstName,
      buyerLastName: entry.buyerLastName,
      phone: entry.phone,
      address: entry.address,
      number: entry.number,
      complement: entry.complement,
      zipCode: entry.zipCode,
      active: entry.active,
    };
    return formattedEntry;
  }
  async create(client: ClientWithoutId): Promise<Client> {
    const entry: Client = await database.write(async () => {
      const newUser: ClientModel = await database
        .get<ClientModel>(Tables.Client)
        .create((newEntry) => {
          newEntry.employee_id = client.employee_id;
          newEntry.companyName = client.companyName;
          newEntry.tradeName = client.tradeName;
          newEntry.taxpayerId = client.taxpayerId;
          newEntry.type = client.type;
          newEntry.buyerFirstName = client.buyerFirstName;
          newEntry.buyerLastName = client.buyerLastName;
          newEntry.phone = client.phone;
          newEntry.address = client.address;
          newEntry.number = client.number;
          newEntry.complement = client.complement;
          newEntry.zipCode = client.zipCode;
          newEntry.active = client.active;
        });

      const formattedEntry: Client = {
        id: newUser.id,
        employee_id: newUser.employee_id,
        companyName: newUser.companyName,
        tradeName: newUser.tradeName,
        taxpayerId: newUser.taxpayerId,
        type: newUser.type,
        buyerFirstName: newUser.buyerFirstName,
        buyerLastName: newUser.buyerLastName,
        phone: newUser.phone,
        address: newUser.address,
        number: newUser.number,
        complement: newUser.complement,
        zipCode: newUser.zipCode,
        active: newUser.active,
      };
      return formattedEntry;
    });

    return entry;
  }
  async update(client: Client): Promise<Client> {
    const entry: ClientModel = await database
      .get<ClientModel>(Tables.Client)
      .find(String(client.id));
    await entry.update((updatedEntry) => {
      updatedEntry.employee_id = client.employee_id;
      updatedEntry.companyName = client.companyName;
      updatedEntry.tradeName = client.tradeName;
      updatedEntry.taxpayerId = client.taxpayerId;
      updatedEntry.type = client.type;
      updatedEntry.buyerFirstName = client.buyerFirstName;
      updatedEntry.buyerLastName = client.buyerLastName;
      updatedEntry.phone = client.phone;
      updatedEntry.address = client.address;
      updatedEntry.number = client.number;
      updatedEntry.complement = client.complement;
      updatedEntry.zipCode = client.zipCode;
      updatedEntry.active = client.active;
    });
    // await database.action(async () => {
    //   entry = a
    // });
    const formattedEntry: Client = {
      id: entry.id,
      employee_id: entry.employee_id,
      companyName: entry.companyName,
      tradeName: entry.tradeName,
      taxpayerId: entry.taxpayerId,
      type: entry.type,
      buyerFirstName: entry.buyerFirstName,
      buyerLastName: entry.buyerLastName,
      phone: entry.phone,
      address: entry.address,
      number: entry.number,
      complement: entry.complement,
      zipCode: entry.zipCode,
      active: entry.active,
    };
    return formattedEntry;
  }
  async delete(id: string): Promise<void> {
    await database.write(async () => {
      const entry = await database
        .get<ClientModel>(Tables.Client)
        .find(String(id));
      await entry.destroyPermanently();
    });
  }
}

export const ClientService = new ClientClass();
