/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { useNavigation } from '@react-navigation/native'

import { useAuth } from '../../hooks/auth'

import logoImg from '../../assets/logo.png'

import { Container, Title, SignOutButton, SignOutButtonText } from './styles'
import Button from '../../components/Button'

interface SignInFormData {
  email: string
  password: string
}

const Dashboard: React.FC = () => {
  const { signOut } = useAuth()
  const navigation = useNavigation()

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
            <Image
              source={logoImg}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                resizeMode: 'center',
                width: '90%',
              }}
            />
            <Button onPress={() => navigation.navigate('Sells')}>Vendas</Button>
            <Button onPress={() => {}}>Compras</Button>
            <Button onPress={() => {}}>Gráficos</Button>
            <Button onPress={() => navigation.navigate('Admin')}>
              Administrativo
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <SignOutButton onPress={() => navigation.navigate('SignIn')}>
        <Icon name="log-out" size={24} color="#9D49D3" />
        <SignOutButtonText>Sair da conta</SignOutButtonText>
      </SignOutButton>
    </>
  )
}

export default Dashboard
