import React, { useState } from 'react'
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
  LogoComponent,
} from './styles'
import DrawerItem from './DrawerItem'
import { menuItems } from './data'

const DrawerMenu: React.FC = () => {
  // const [active, setActive] = useState()
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
          {menuItems.map(drawerData => (
            <DrawerItem key={drawerData.screen} {...{ drawerData }} />
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
