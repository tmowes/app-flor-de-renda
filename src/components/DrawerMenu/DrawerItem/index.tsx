import React from 'react'
import { Text } from 'react-native'

import { Container } from './styles'

const DrawerItem: React.FC = () => {
  return (
    <Container>
      <Text style={{ color: '#000000' }}>DrawerItem</Text>
    </Container>
  )
}

export default DrawerItem
