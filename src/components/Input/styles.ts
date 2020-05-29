/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components/native'
import FeatherIcon from 'react-native-vector-icons/Feather'

interface ContainerProps {
  isFocused: boolean
  isErrored: boolean
}

export const Container = styled.View<ContainerProps>`
  width: 90%;
  height: 50px;
  padding: 0 16px;
  background: #ffbafd;
  border-radius: 25px;
  margin-bottom: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: #f4ede8;
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      border-color: #9d49d3;
    `}
`
export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`

export const TextInput = styled.TextInput`
  flex: 1;
  color: #312e38;
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
`
