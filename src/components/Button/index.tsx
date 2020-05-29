import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'
import { Container, ButtonText } from './styles'

interface ButtonProps extends RectButtonProperties {
  children: string
  icon?: string
  iconColor?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  iconColor,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {icon && (
        <Icon
          style={{ marginRight: 8 }}
          name={icon}
          size={24}
          color={iconColor}
        />
      )}
      <ButtonText>{children}</ButtonText>
    </Container>
  )
}

export default Button
