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
import { drawerData } from './drawerData'

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
          {drawerData.map(data => (
            <DrawerItem key={data.screen} {...data} />
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
