/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Platform,
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { useAuth } from '../../hooks/auth'

import logoImg from '../../assets/logo.png'

import { Container, Title, SignOutButton, SignOutButtonText } from './styles'

interface SignInFormData {
  email: string
  password: string
}

const Dashboard: React.FC = () => {
  const { signOut } = useAuth()

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>DASHBORAD</Title>
            </View>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <SignOutButton onPress={signOut}>
        <Icon name="log-out" size={20} color="#9D49D3" />
        <SignOutButtonText>Sair da conta</SignOutButtonText>
      </SignOutButton>
    </>
  )
}

export default Dashboard
