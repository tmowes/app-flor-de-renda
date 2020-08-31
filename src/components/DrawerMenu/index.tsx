import React from 'react'
import { View } from 'react-native'

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
  Avatar,
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

const DrawerMenu: React.FC = () => {
  return (
    <Container>
      <Header>
        <MenuBackGroundRight />
        <HeaderContent>
          <View>
            <Avatar />
            <LogoComponent />
          </View>
        </HeaderContent>
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

export default DrawerMenu
