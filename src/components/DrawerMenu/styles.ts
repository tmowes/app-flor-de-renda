import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import logoImg from '../../assets/logo.png'

export const Container = styled.View`
  flex: 1;
`
export const Header = styled.View`
  flex: 0.25;
`

export const HeaderContent = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-bottom-right-radius: 60px;
  background-color: #730fc3;
`
export const MenuContent = styled.View`
  flex: 0.8;
`
export const MenuBackGroundLeft = styled.View`
  flex: 1;
  background-color: #730fc3;
`

export const MenuBackGroundRight = styled.View`
  flex: 1;
  background-color: #ebcef4;
`

export const MenuBackGroundRight2 = styled.View`
  flex: 1;
  background-color: black;
`

export const MenuItem = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: #ebcef4;
`
export const Footer = styled.View`
  flex: 0.1;
`

export const FooterContent = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-top-right-radius: 50px;
  background-color: black;
`
export const Avatar = styled(Icon).attrs({ name: 'face', size: 200 })`
  color: #cd4294;
  position: absolute;
  top: -40px;
  left: -60px;
`
export const LogoComponent = styled.Image.attrs({
  source: logoImg,
  resizeMode: 'contain',
})`
  width: 120px;
  margin: -20px 0 0 130px;
`
