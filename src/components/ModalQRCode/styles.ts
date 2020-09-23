import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Feather'

export const PopUpOffButton = styled.TouchableWithoutFeedback``

export const PopUpOff = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: transparent;
`

export const DetailsPopUpOn = styled.View`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  top: 0px;
  background-color: #ffdbfa;
  z-index: 20;
  margin: 150px 8px 8px;
  border-radius: 16px;
  border-color: #9d49d3;
  border-width: 2px;
`

export const PopUpHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const PopUpTitle = styled.Text`
  font-size: 25px;
  text-transform: uppercase;
  margin-left: auto;
  padding-left: 16px;
`
export const MinimizeButton = styled.TouchableOpacity`
  margin-right: 16px;
  margin-left: auto;
`

export const MinimizeIcon = styled(Icon).attrs({
  name: 'minus',
  size: 24,
})`
  color: #9d49d3;
`
