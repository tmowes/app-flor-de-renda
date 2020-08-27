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
  MenuBackGroundRight2,
  Footer,
  FooterContent,
} from './styles'
import DrawerItem from './DrawerItem'

const items = [
  {
    icon: 'shopping-cart',
    label: 'linha 1',
    screen: 'Sell1',
    color: 'black',
  },
  {
    icon: 'bar-chart-2',
    label: 'linha 2',
    screen: 'Sell2',
    color: 'black',
  },
  {
    icon: 'shopping-cart',
    label: 'linha 3',
    screen: 'Sell3',
    color: 'black',
  },
]

// interface DrawerProps {}

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
        <MenuBackGroundRight2 />
        <MenuItem>
          {items.map(item => (
            <DrawerItem key={item.screen} {...item} />
          ))}
        </MenuItem>
      </MenuContent>
      <Footer>
        <MenuBackGroundRight />
        <FooterContent />
      </Footer>
    </Container>
  )
}

export default Drawer
