import React, { useCallback, useState } from 'react'
import Slider from '@react-native-community/slider'
import { CheckBox } from 'react-native-elements'
import { Form } from '@unform/mobile'
import { View } from 'react-native'
import Button from '../../Button'
import SmallInput from '../../SmallInput'

import {
  PaymentTypeContainer,
  LogoImage,
  InTest,
  InCash,
  InTerm,
  Title,
} from './styles'

const PaymentModal: React.FC = () => {
  const [paymentTypeState, setPaymentTypeState] = useState<number>(0)
  const [termQuantity, setTermQuantity] = useState<number>(2)

  const handlePaymentState = useCallback((checkBoxId: number) => {
    if (checkBoxId === 0) {
      setPaymentTypeState(0)
    } else if (checkBoxId === 1) {
      setPaymentTypeState(1)
    } else if (checkBoxId === 2) {
      setPaymentTypeState(2)
    }
  }, [])

  const handleTermQuantity = useCallback((value: number) => {
    setTermQuantity(value)
  }, [])

  return (
    <>
      <PaymentTypeContainer>
        <CheckBox
          onPress={() => {
            handlePaymentState(0)
          }}
          checkedIcon="dot-circle-o"
          checkedColor="#730fc3"
          uncheckedIcon="circle-o"
          uncheckedColor="#9D49D388"
          checked={paymentTypeState === 0}
          title="À VISTA"
          containerStyle={{
            backgroundColor: 'transparent',
            borderColor: 'transparent',
          }}
          fontFamily="RobotoSlab-Medium"
        />
        <CheckBox
          onPress={() => {
            handlePaymentState(1)
          }}
          checkedIcon="dot-circle-o"
          checkedColor="#730fc3"
          uncheckedIcon="circle-o"
          uncheckedColor="#9D49D388"
          checked={paymentTypeState === 1}
          title="À PRAZO"
          containerStyle={{
            backgroundColor: 'transparent',
            borderColor: 'transparent',
          }}
          fontFamily="RobotoSlab-Medium"
        />
        <CheckBox
          onPress={() => {
            handlePaymentState(2)
          }}
          checkedIcon="dot-circle-o"
          checkedColor="#730fc3"
          uncheckedIcon="circle-o"
          uncheckedColor="#9D49D388"
          checked={paymentTypeState === 2}
          title="EM PROVA"
          containerStyle={{
            backgroundColor: 'transparent',
            borderColor: 'transparent',
          }}
          fontFamily="RobotoSlab-Medium"
        />
      </PaymentTypeContainer>

      {paymentTypeState === 0 && (
        <InCash>
          <Form onSubmit={() => true}>
            <Title>Desconto</Title>
            <SmallInput
              autoCorrect={false}
              autoCapitalize="none"
              name="name"
              placeholder="5,0%"
              returnKeyType="next"
              onSubmitEditing={() => true}
            />
          </Form>
        </InCash>
      )}
      {paymentTypeState === 1 && (
        <InTerm>
          <Form onSubmit={() => true}>
            <Title>
              {termQuantity}
              {'  '}
              parcelas de R$ 500,00
            </Title>
            <Slider
              style={{ width: '90%', height: 40 }}
              step={1}
              onValueChange={termValue => {
                handleTermQuantity(termValue)
              }}
              value={termQuantity}
              minimumValue={1}
              maximumValue={6}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#730FC3"
            />
            <View
              style={{
                flex: 1,
                position: 'absolute',
                top: 60,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'stretch',
                justifyContent: 'space-around',
              }}
            >
              <View
                style={{
                  width: '33%',
                  alignItems: 'center',
                }}
              >
                <Title>Juros a.m.</Title>
                <SmallInput
                  autoCorrect={false}
                  autoCapitalize="none"
                  name="name"
                  placeholder="2,5%"
                  returnKeyType="next"
                  onSubmitEditing={() => true}
                />
              </View>
              <View
                style={{
                  width: '50%',
                  alignItems: 'center',
                }}
              >
                <Title>1ª Parcela</Title>
                <SmallInput
                  autoCorrect={false}
                  autoCapitalize="none"
                  name="name"
                  placeholder="10/07/2020"
                  returnKeyType="next"
                  onSubmitEditing={() => true}
                />
              </View>
              <View
                style={{
                  width: '40%',
                  alignItems: 'center',
                }}
              >
                <Title>Valor Entrada</Title>
                <SmallInput
                  autoCorrect={false}
                  autoCapitalize="none"
                  name="name"
                  placeholder="R$ 500,00"
                  returnKeyType="next"
                  onSubmitEditing={() => true}
                />
              </View>
            </View>
          </Form>
        </InTerm>
      )}
      {paymentTypeState === 2 && (
        <InTest>
          <Title>Data Retorno</Title>
          <Form onSubmit={() => true}>
            <SmallInput
              autoCorrect={false}
              autoCapitalize="none"
              name="name"
              placeholder="10/07/2020"
              returnKeyType="next"
              onSubmitEditing={() => true}
            />
          </Form>
        </InTest>
      )}

      <Button
        style={{ marginTop: 72 }}
        icon="dollar-sign"
        iconColor="#FBFF38"
        onPress={() => true}
      >
        Finalizar Venda
      </Button>
      <LogoImage />
    </>
  )
}

export default PaymentModal
