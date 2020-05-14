import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  width: 100%;
  height: 50px;
  background: #9d49d3;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  color: #f4ede8;
`
