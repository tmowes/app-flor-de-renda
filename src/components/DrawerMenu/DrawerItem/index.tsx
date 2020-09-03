/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

import { useNavigation } from '@react-navigation/native'
import { Container, IconView, MenuText } from './styles'
import { DrawerItemProps } from './types'

const DrawerItem: React.FC<DrawerItemProps> = ({ icon, label, screen }) => {
  const { navigate } = useNavigation()
  return (
    <Container onPress={() => navigate(screen)}>
      <IconView>
        <Icon name={icon} size={30} color="green" />
      </IconView>
      <MenuText>{label}</MenuText>
    </Container>
  )
}

export default DrawerItem
