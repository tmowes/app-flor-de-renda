import styled from 'styled-components/native'
import { Platform } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #ffd0f8;
  padding: 16px 30px ${Platform.OS === 'android' ? 60 : 40}px;
`
export const Title = styled.Text`
  font-size: 20px;
  color: #312e38;
  font-family: 'RobotoSlab-Medium';
  margin: 8px 0 16px;
`
export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 48px;
`
export const ForgotPasswordText = styled.Text`
  color: #312e38;
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
`
export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffd0f8;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-color: #9d49d3;
  padding: 8px 0 ${8 + getBottomSpace()}px;
`
export const CreateAccountButtonText = styled.Text`
  color: #730fc3;
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
  margin-left: 16px;
`
