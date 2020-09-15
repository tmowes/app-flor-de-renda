import React from 'react'
import { Image, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import logoImg from '../../assets/logo.png'

import { Container, SignOutButton, SignOutButtonText } from './styles'
import Button from '../../components/Button'

const Dashboard: React.FC = () => {
  const { navigate } = useNavigation()

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
            <Button onPress={() => navigate('Sells')}>Vendas</Button>
            <Button onPress={() => navigate('Admin')}>Administrativo</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <SignOutButton onPress={() => navigate('SignIn')}>
        <Icon name="log-out" size={24} color="#9D49D3" />
        <SignOutButtonText>Sair da conta</SignOutButtonText>
      </SignOutButton>
    </>
  )
}

export default Dashboard
