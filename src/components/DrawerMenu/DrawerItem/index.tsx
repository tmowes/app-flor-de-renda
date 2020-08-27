import React from 'react'
// import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { Container, IconView, MenuText } from './styles'
import { DrawerItemProps } from './types'

const DrawerItem: React.FC<DrawerItemProps> = ({ icon, label }) => {
  return (
    <Container>
      <IconView>
        <Icon name={icon} size={30} color="green" />
      </IconView>
      <MenuText>{label}</MenuText>
    </Container>
  )
}

export default DrawerItem
