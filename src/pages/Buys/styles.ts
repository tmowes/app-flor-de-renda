import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Feather'
import { getBottomSpace } from 'react-native-iphone-x-helper'

import logoImg from '../../assets/logo.png'

export const MenuIcon = styled(Icon).attrs({
  name: 'menu',
  size: 32,
  color: '#9D49D3',
})``

export const AddIcon = styled(Icon).attrs({
  name: 'plus-circle',
  size: 30,
  color: '#9D49D3',
})``

export const RemoveIcon = styled(Icon).attrs({
  name: 'minus',
  size: 24,
  color: '#9D49D3',
})``

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0px 0px;
  background: #9d49d3;
`
export const Header = styled.View`
  position: absolute;
  top: 4px;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #ffd0f8;
  padding: 10px;
`
export const ClientHeader = styled.View`
  position: relative;
  top: 0px;
  flex: 1;
  flex-direction: row;
  padding: 0 16px;
`

export const ClientContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`
export const MenuButton = styled.TouchableOpacity``
export const CartHeader = styled.View`
  position: relative;
  flex-direction: row;
  background: #ffbafd;
  border-bottom-width: 1px;
  border-color: #9d49d3;
  margin-top: 8px;
`
export const OrderQuantity = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const OrderValue = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const FlatListHeader = styled.View`
  position: relative;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #9d49d3;
`
export const FlatListHeaderText = styled.Text`
  font-size: 24px;
  color: #312e38;
  font-family: 'RobotoSlab-Medium';
  margin: 8px 0;
`
export const BuysScrollView = styled.ScrollView`
  flex: 1;
  top: 80px;
  width: 100%;
  background: #ffd0f8;
  margin: 0 0 100px;
  border-color: #9d49d3;
  border-top-width: 1px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`
export const Title = styled.Text`
  font-size: 14px;
  color: #312e38;
  font-family: 'RobotoSlab-Medium';
`
export const OrdersTitle = styled.Text`
  font-size: 20px;
  color: #312e38;
  font-family: 'RobotoSlab-Medium';
  margin: 0 0 8px;
`
export const DetailsPopUp = styled.View`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  top: 0px;
  background-color: #ffd0f8;
  z-index: 10;
  margin: 150px 8px 0px;
  border-radius: 16px;
  border-color: #9d49d3;
  border-width: 2px;
`
export const Footer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffd0f8;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-color: #9d49d3;
  padding: 0 16px ${40 + getBottomSpace()}px;
`
export const InCash = styled.View`
  align-items: center;
  justify-content: center;
`
export const InTerm = styled.View`
  align-items: center;
  justify-content: center;
`
export const InTest = styled.View`
  align-items: center;
  justify-content: center;
`
export const AddButton = styled.TouchableOpacity``
export const CartButton = styled.TouchableOpacity``

export const LogoImage = styled.Image.attrs({
  source: logoImg,
  resizeMode: 'center',
})`
  flex: 1;
  height: 56px;
`
