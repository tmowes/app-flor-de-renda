/* eslint-disable no-console */
import React, { useCallback, useState } from 'react'
import { View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
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
  LogoPiktewComponent,
} from './styles'
import DrawerItem from './DrawerItem'
import { menuItems } from './data'

const DrawerMenu: React.FC = () => {
  const { navigate } = useNavigation()
  const [screenSelected, setScreenSelected] = useState<string | undefined>()
  const handleDrawerNavigation = useCallback(
    (activeScreen: string) => {
      if (activeScreen !== screenSelected) {
        setScreenSelected(activeScreen)
      } else {
        setScreenSelected(undefined)
      }
      navigate(activeScreen)
    },
    [navigate, screenSelected],
  )

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
          {menuItems.map(({ screen, icon, label }) => (
            <DrawerItem
              onPress={() => handleDrawerNavigation(screen)}
              selected={screen === screenSelected}
              key={screen}
              {...{ screen, icon, label }}
            />
          ))}
        </MenuItem>
      </MenuContent>
      <Footer>
        <MenuBackGroundRight />
        <FooterContent>
          <LogoPiktewComponent />
        </FooterContent>
      </Footer>
    </Container>
  )
}

export default DrawerMenu
