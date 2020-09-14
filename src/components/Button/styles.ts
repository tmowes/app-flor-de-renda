import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  min-width: 90%;
  height: 48px;
  background: #9d49d3;
  border-radius: 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 16px 16px;
`

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  color: #f4ede8;
`
