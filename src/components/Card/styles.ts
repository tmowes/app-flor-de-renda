import Icon from 'react-native-vector-icons/Feather'
import styled, { css } from 'styled-components/native'
import image from '../../assets/LOGO1.png'
import { productImageProps } from './types'

export const Container = styled.View`
  border-radius: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #730fc3;
  overflow: hidden;
`

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background: #9d49d340;
`
export const ActionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const CardTitle = styled.Text.attrs({ numberOfLines: 2 })`
  text-transform: uppercase;
  margin-left: 8px;
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
  color: #12031f;
  max-width: 150px;
`

export const MinusIcon = styled(Icon).attrs({
  name: 'minus-circle',
  size: 28,
})`
  margin: 0 4px;
  color: #9d49d3;
`
export const AddIcon = styled(Icon).attrs({
  name: 'plus-circle',
  size: 28,
})`
  color: #9d49d3;
`

export const DeleteContainer = styled.View`
  background: #c5303040;
  overflow: hidden;
  border-bottom-left-radius: 12px;
  height: 40px;
  /* margin: auto 0; */
  justify-content: center;
  align-items: center;
`

export const DeleteIcon = styled(Icon).attrs({
  name: 'x',
  size: 28,
  color: 'black',
})`
  /* background-color: #fff; */
`

export const CardFooter = styled.View`
  /* flex-direction: row; */
  /* flex-wrap: wrap; */
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 4px 0;
  align-items: center;
  background: #9d49d340;
`

export const TextLabel = styled.Text`
  color: #12031f;
  margin-right: 4px;
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
`

export const TextValue = styled.Text`
  color: #12031f;
  margin-right: 4px;
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
`
export const TotalContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 8px;
  align-items: center;
`
export const ImageContainer = styled.View`
  flex: 1;
`
export const ProductImage = styled.Image.attrs({
  resizeMode: 'cover',
})<productImageProps>`
  min-height: 250px;
  ${({ cardWidth }) =>
    cardWidth &&
    css`
      width: ${cardWidth}px;
    `}/* width: 150px; */

  /* background: red; */
`
