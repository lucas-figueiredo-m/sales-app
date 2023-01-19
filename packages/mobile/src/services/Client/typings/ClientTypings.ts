import type { Client, ClientWithoutId } from '@mobile/models';

export type ClientService = {
  list: () => Promise<Client[]>;
  get: (id: Client['id']) => Promise<Client>;
  create: (person: ClientWithoutId) => Promise<Client>;
  update: (person: Client) => Promise<Client>;
  delete: (id: Client['id']) => Promise<void>;
};
