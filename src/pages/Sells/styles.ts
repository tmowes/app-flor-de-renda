import styled from 'styled-components/native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { FlatList, CheckBox } from 'react-native'

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
`
export const Header = styled.View`
  position: absolute;
  top: 16px;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 28%; */
`
export const ClientHeader = styled.View`
  position: relative;
  top: 0px;
  flex: 1;
  flex-direction: row;
  width: 100%;
  height: 50%;
`
export const BackButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const TodayText = styled.Text`
  font-size: 16px;
  color: #312e38;
  font-family: 'RobotoSlab-Medium';
`
export const CartHeader = styled.View`
  position: relative;
  top: 8px;
  left: 0;
  flex-direction: row;
  width: 120%;
  background: #ffbafd;
  margin: 8px 0;
  border-bottom-width: 1px;
  border-color: #9d49d3;
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
  left: 0;
  flex-direction: row;
  width: 120%;
  /* height: 35%; */
  /* background: green; */
  justify-content: space-evenly;
  align-items: flex-start;
  border-bottom-width: 1px;
  border-color: #9d49d3;
`
export const FlatListHeaderText = styled.Text`
  font-size: 24px;
  color: #312e38;
  font-family: 'RobotoSlab-Medium';
  margin: 8px 0 8px;
`

export const ProductList = styled(FlatList as new () => FlatList<CartState>)`
  flex: 1;
  position: relative;
  top: 200px;
  left: 0;
  width: 120%;
  padding: 0 16px;
`
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
  font-size: 18px;
  color: #312e38;
  font-family: 'RobotoSlab-Medium';
  margin: 0 0 8px;
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
  background-color: #FFD0F8;
  z-index: 10;
  margin: 170px 16px 40px;
  border-radius: 20px;
  border-color: #9D49D3;
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
export const Checkbox = styled(CheckBox)`
  border-radius: 20px;
`