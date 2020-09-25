import styled from 'styled-components/native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import Icon from 'react-native-vector-icons/Feather'
import logoImg from '../../assets/logo.png'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 16px 16px;
  background: #9d49d3;
`
export const Header = styled.View`
  position: absolute;
  top: 5px;
  align-items: center;
  justify-content: center;
  width: 110%;
  background: #ffdbfa;
  padding-top: 12px;
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

export const MenuIcon = styled(Icon).attrs({
  name: 'menu',
  size: 32,
})`
  color: #9d49d3;
`
export const AddIcon = styled(Icon).attrs({
  name: 'plus-circle',
  size: 30,
})`
  color: #9d49d3;
`
export const CartIcon = styled(Icon).attrs({
  name: 'shopping-cart',
  size: 30,
})`
  color: #9d49d3;
`

export const LogoImage = styled.Image.attrs({
  source: logoImg,
  resizeMode: 'center',
})`
  flex: 1;
  height: 56px;
`

export const CartHeader = styled.View`
  position: relative;
  flex-direction: row;
  background: #ffbafd;
  border-bottom-width: 1px;
  border-top-width: 1px;
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
`
export const FlatListHeaderText = styled.Text`
  font-size: 24px;
  color: #312e38;
  font-family: 'RobotoSlab-Medium';
  margin: 8px 0;
`
export const BuysScrollView = styled.ScrollView`
  flex: 1;
  top: 186px;
  margin: 0 0 178px;
  width: 110%;
  background: #ffdbfa;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`

export const SignOutButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffdbfa;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-color: #9d49d3;
  padding: 8px 0 ${8 + getBottomSpace()}px;
`
export const SignOutButtonText = styled.Text`
  color: #730fc3;
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
  margin-left: 16px;
`

export const ProductTitle = styled.Text`
  font-size: 16px;
  color: #312e38;
  font-family: 'RobotoSlab-Medium';
  margin: 0 0 8px;
`
export const Product = styled.View`
  padding: 2px 32px;
  border-bottom-width: 1px;
  border-color: #9d49d3;
  flex-direction: row;
`
export const OrdersTitle = styled.Text`
  font-size: 20px;
  color: #312e38;
  font-family: 'RobotoSlab-Medium';
  margin: 0 0 8px;
`
export const Footer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffdbfa;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-color: #9d49d3;
  padding: 0 16px ${40 + getBottomSpace()}px;
`
export const AddButton = styled.TouchableOpacity``
export const CartButton = styled.TouchableOpacity``
