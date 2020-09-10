import React, { useState } from 'react'
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
} from './styles'
import DrawerItem from './DrawerItem'
import { menuItems } from './data'

const DrawerMenu: React.FC = () => {
  const { navigate } = useNavigation()
  const [screenSelected, setScreenSelected] = useState('')
  const handleDrawernavigation = (activeScreen: string, index: number) => {
    // if (activeScreen === menuItems.map(({screen})=> screen) {
    //   console.log('activeScreen ======', activeScreen, index)
    // }
    //   setScreenSelected(activeScreen)
    //   selected = !selected
    const teste = menuItems
      .filter(menu => menu.screen === activeScreen)
      .map(menuItem => menuItem.screen)
    console.log({ teste })
    navigate(activeScreen)
  }

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
          {menuItems.map(({ screen, icon, selected, label }, index) => (
            <DrawerItem
              onPress={() => handleDrawernavigation(screen, index)}
              key={screen}
              {...{ screen, icon, selected, label }}
            />
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
