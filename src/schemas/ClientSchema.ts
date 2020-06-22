export default class ClientSchema {
  static schema = {
    name: 'Client',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      name: 'string',
      cpf: 'string',
      rg: 'string',
      phone: 'string',
      street: 'string',
      number: 'string',
      additional: 'string',
      neighborhood: 'string',
      city: 'string',
    },
  }
}
