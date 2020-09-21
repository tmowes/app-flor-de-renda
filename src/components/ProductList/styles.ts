import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const ProductRow = styled.View`
  flex: 1;
  padding: 0 32px;
  /* border-bottom-width: 1px;
  border-color: #9d49d3; */
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const Product = styled(RectButton)`
  /* flex: 1;
  padding: 0 32px;
  border-bottom-width: 1px;
  border-color: #9d49d3;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; */
`
export const Title = styled.Text`
  font-size: 14px;
  color: #312e38;
  font-family: 'RobotoSlab-Medium';
  margin: 8px 0;
`
export const ProductTitle = styled.Text`
  font-size: 16px;
  color: #312e38;
  font-family: 'RobotoSlab-Medium';
`
