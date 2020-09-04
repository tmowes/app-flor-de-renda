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
  LogoComponent,
} from './styles'
import DrawerItem from './DrawerItem'
import { menuItems } from './data'

const DrawerMenu: React.FC = () => {
  return (
    <Container>
      <Header>
        <MenuBackGroundRight />
        <HeaderContent>
          <View>
            <LogoComponent />
          </View>
        </HeaderContent>
      </Header>
      <MenuContent>
        <MenuBackGroundLeft />
        <MenuBackGroundRight2 />
        <MenuItem>
          {menuItems.map(item => (
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
