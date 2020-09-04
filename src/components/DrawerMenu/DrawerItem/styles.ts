import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  margin: 8px 16px;
  border-radius: 12px;
`
export const IconView = styled.View`
  margin-right: 16px;
`
export const MenuText = styled.Text`
  font-size: 24px;
  text-transform: uppercase;
  color: #9d49d3;
`
