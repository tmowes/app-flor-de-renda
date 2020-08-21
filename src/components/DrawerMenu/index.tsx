import React from 'react'
import { View } from 'react-native'
import {
  DrawerContentOptions,
  DrawerContentComponentProps,
} from '@react-navigation/drawer'

import {
  Container,
  Header,
  HeaderContent,
  MenuContent,
  MenuItem,
  MenuBackGroundLeft,
  MenuBackGroundRight,
  Footer,
  FooterContent,
} from './styles'

interface DrawerProps {}

const Drawer = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
  console.log({ props })
  return (
    <Container>
      <Header>
        <MenuBackGroundRight />
        <HeaderContent />
      </Header>

      <MenuContent>
        <MenuBackGroundLeft />
        <MenuItem />
      </MenuContent>
      <Footer>
        <MenuBackGroundRight />
        <FooterContent />
      </Footer>
    </Container>
  )
}

export default Drawer
