import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

import { useNavigation } from '@react-navigation/native'
import { Container, IconView, MenuText } from './styles'
import { DrawerItemProps } from './types'

const DrawerItem: React.FC<DrawerItemProps> = ({ drawerData }) => {
  const { navigate } = useNavigation()

  const handleDrawernavigation = (activeScreen: string) => {
    if (activeScreen === drawerData.screen) {
      console.log('activeScreen ======', activeScreen)
      drawerData.selected = !drawerData.selected
      navigate(activeScreen)
    }
  }
  return (
    <Container
      onPress={() => handleDrawernavigation(drawerData.screen)}
      style={{
        backgroundColor: drawerData.selected ? '#9d49d3' : 'transparent',
      }}
    >
      <IconView>
        <Icon
          name={drawerData.icon}
          size={30}
          color={drawerData.selected ? 'white' : '#9d49d3'}
        />
      </IconView>
      <MenuText
        style={{
          color: drawerData.selected ? 'white' : '#9d49d3',
        }}
      >
        {drawerData.label}
      </MenuText>
    </Container>
  )
}

export default DrawerItem
