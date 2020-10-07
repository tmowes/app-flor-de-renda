import React from 'react'

import { Container } from './styles'
import { ButtonIconContainerProps } from './types'

const ButtonIconContainer: React.FC<ButtonIconContainerProps> = ({
  onPress,
  children,
}) => {
  return <Container onPress={onPress}>{children}</Container>
}

export default ButtonIconContainer
