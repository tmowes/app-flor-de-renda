import Realm from 'realm'

import ClientSchema from '../schemas/ClientSchema'

const getRealm = Realm.open({
  schema: [ClientSchema],
})

export default getRealm
