import styled from 'styled-components/native'
import logoImg from '../../../assets/logo.png'

export const PaymentTypeContainer = styled.View`
  position: relative;
  left: 16px;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

export const LogoImage = styled.Image.attrs({
  source: logoImg,
  resizeMode: 'center',
})`
  flex: 1;
  width: 100%;
`
export const Title = styled.Text`
  font-size: 14px;
  color: #312e38;
  font-family: 'RobotoSlab-Medium';
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
