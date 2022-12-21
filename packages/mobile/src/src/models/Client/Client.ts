export interface ClientWithoutId {
  socialName: string
  // fantasyName: string,
  document: string
  // phone: string,
  // address: string,
  // number: string,
  // complement: string,
  // zipCode: string,
  // createdAt: string,
  // updatedAt: string
}

export type Client = ClientWithoutId & { id: string }

// export const canCreatePerson = (person: PersonWithoutId): boolean => {
//   return Boolean(person.name && person.birthday);
// };

// export const canUpdatePerson = (person: Person): boolean => {
//   return Boolean(person.id && person.name && person.birthday);
// };
