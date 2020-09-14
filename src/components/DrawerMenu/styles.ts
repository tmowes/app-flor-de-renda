import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import logoImg from '../../assets/logo.png'
import logoPik from '../../assets/LOGO1.png'

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
  background-color: #bb82e0;
`
export const MenuContent = styled.View`
  flex: 0.8;
`
export const MenuBackGroundLeft = styled.View`
  flex: 1;
  background-color: #bb82e0;
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
  color: white;
  position: absolute;
  top: -40px;
  left: -60px;
`
export const LogoComponent = styled.Image.attrs({
  source: logoImg,
  resizeMode: 'contain',
})`
  width: 220px;
  margin: 8px 0 0 24px;
`

export const LogoPiktewComponent = styled.Image.attrs({
  source: logoPik,
  resizeMode: 'contain',
})`
  flex: 1;
  width: 100px;
  margin: 0 auto;
`
