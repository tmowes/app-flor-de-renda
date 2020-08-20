import React from 'react'
import { View } from 'react-native'
import {
  DrawerContentOptions,
  DrawerContentComponentProps,
} from '@react-navigation/drawer'

import { Container, Header, HeaderContent, MenuContent, MenuItem } from './styles'

interface DrawerProps {}

const Drawer = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
  console.log({ props })
  return (
    <Container>
      <Header>
        <HeaderContent />
      </Header>
      <MenuContent>
        <MenuItem />
      </MenuContent>
    </Container>
  )
}

export default Drawer
