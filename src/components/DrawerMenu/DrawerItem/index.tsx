import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

import { Container, IconView, MenuText } from './styles'
import { DrawerDataProps } from './types'

const DrawerItem: React.FC<DrawerDataProps> = ({
  icon,
  selected,
  label,
  onPress,
}) => {
  return (
    <Container
      onPress={onPress}
      style={{
        backgroundColor: selected ? '#9d49d3' : 'transparent',
      }}
    >
      <IconView>
        <Icon name={icon} size={30} color={selected ? 'white' : '#9d49d3'} />
      </IconView>
      <MenuText
        style={{
          color: selected ? 'white' : '#9d49d3',
        }}
      >
        {label}
      </MenuText>
    </Container>
  )
}

export default DrawerItem
