import styled from 'styled-components/native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { FlatList } from 'react-native'

interface CartState {
  id: string
  title: string
  price: number
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 16px 16px;
  background: #ffd0f8;
`
export const Header = styled.View`
  position: absolute;
  top: 16px;
  align-items: center;
  justify-content: center;
  width: 110%;
`
export const ClientHeader = styled.View`
  position: relative;
  top: 0px;
  flex: 1;
  flex-direction: row;
  padding: 0 16px;
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
export const ViewTest = styled.View`
  flex: 1;
  top: 184px;
  margin: 0 0 190px;
  width: 110%;
`
export const ProductList = styled(FlatList as new () => FlatList<CartState>)``

export const SignOutButton = styled.TouchableOpacity`
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
  padding: 8px 0 ${8 + getBottomSpace()}px;
`
export const SignOutButtonText = styled.Text`
  color: #730fc3;
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
  margin-left: 16px;
`
export const Title = styled.Text`
  font-size: 14px;
  color: #312e38;
  font-family: 'RobotoSlab-Medium';
  /* margin: 0 0 8px; */
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
