/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components/native'
import FeatherIcon from 'react-native-vector-icons/Feather'

interface ContainerProps {
  isFocused: boolean
  isErrored: boolean
}

export const Container = styled.View<ContainerProps>`
  width: 57%;
  height: 40px;
  padding: 0 8px;
  background: #ffbafd;
  border-radius: 16px;
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
  margin-right: 8px;
`

export const TextInput = styled.TextInput`
  flex: 1;
  color: #312e38;
  text-align: center;
  font-family: 'RobotoSlab-Regular';
  font-size: 14px;
`
