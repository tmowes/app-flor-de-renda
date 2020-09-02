import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  /* flex: 1; */
  flex-direction: row;
  align-items: center;
  /* justify-content: space-around; */
  padding: 30px;
`
export const IconView = styled.View`
  margin-right: 16px;
`
export const MenuText = styled.Text`
  font-size: 24px;
  text-transform: uppercase;
`
