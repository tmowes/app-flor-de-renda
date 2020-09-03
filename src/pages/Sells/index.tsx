/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, useEffect } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackBase,
} from 'react-native'

import Slider from '@react-native-community/slider'
import { CheckBox } from 'react-native-elements'

import { useNavigation, DrawerActions } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import Icon from 'react-native-vector-icons/Feather'

import formatValue from '../../utils/formatValue'
import logoImg from '../../assets/logo.png'
import SmallInput from '../../components/SmallInput'
import Button from '../../components/Button'
import TinyInput from '../../components/TinyInput'

import {
  Container,
  SignOutButton,
  MenuButton,
  SignOutButtonText,
  ClientHeader,
  FlatListHeader,
  FlatListHeaderText,
  Header,
  CartHeader,
  OrderQuantity,
  OrderValue,
  Title,
  OrdersTitle,
  ProductList,
  ProductTitle,
  Product,
  Footer,
  DetailsPopUpOn,
  ViewTest,
  InTest,
  InCash,
  InTerm,
  DetailsPopUpOff,
} from './styles'
import { data } from '../../temp/products'
import api from '../../services/api'

interface CartState {
  id: string
  title: string
  price: number
  quantity: number
}

const Sells: React.FC = () => {
  const [products, setProducts] = useState<CartState[]>([])
  const { dispatch } = useNavigation()
  const [popup, setPopup] = useState<boolean>(false)
  const [qrcode, setQrcode] = useState<boolean>(false)
  const [paymentTypeState, setPaymentTypeState] = useState<number>(0)

  const [termQuantity, setTermQuantity] = useState<number>(2)

  function handleTermQuantity(value: number) {
    setTermQuantity(value)
  }

  function handlePopup() {
    if (!popup) {
      setPopup(true)
    } else {
      setPopup(false)
    }
  }
  function handlePaymentState(checkBoxId: number) {
    if (checkBoxId === 0) {
      setPaymentTypeState(0)
    } else if (checkBoxId === 1) {
      setPaymentTypeState(1)
    } else if (checkBoxId === 2) {
      setPaymentTypeState(2)
    }
  }

  function handlerQrcode() {
    if (!qrcode) {
      setQrcode(true)
    } else {
      setQrcode(false)
    }
  }

  return (
    <>
      <Container>
        <Header>
          <ClientHeader>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MenuButton onPress={() => dispatch(DrawerActions.openDrawer())}>
                <Icon name="menu" size={32} color="#9D49D3" />
              </MenuButton>
              <Image
                source={logoImg}
                style={{
                  flex: 1,
                  resizeMode: 'center',
                  height: 56,
                }}
              />
              <Form onSubmit={() => {}}>
                <TinyInput
                  autoCorrect={false}
                  autoCapitalize="none"
                  name="name"
                  placeholder="Cliente"
                  icon="user"
                  returnKeyType="next"
                  onSubmitEditing={() => {}}
                />
              </Form>
            </View>
          </ClientHeader>
          <CartHeader>
            <OrderQuantity>
              <OrdersTitle>Quantidade</OrdersTitle>
              <OrdersTitle>20</OrdersTitle>
            </OrderQuantity>
            <OrderValue>
              <OrdersTitle>Total</OrdersTitle>
              <OrdersTitle>R$ 1.000,00</OrdersTitle>
            </OrderValue>
          </CartHeader>
          <FlatListHeader>
            <TouchableOpacity onPress={handlerQrcode}>
              <Icon name="plus-circle" size={30} color="#9D49D3" />
            </TouchableOpacity>
            <FlatListHeaderText> PEDIDO </FlatListHeaderText>
            <TouchableOpacity onPress={handlePopup}>
              <Icon name="shopping-cart" size={30} color="#9D49D3" />
            </TouchableOpacity>
          </FlatListHeader>
        </Header>
        <ViewTest>
          <ProductList<any>
            data={data}
            keyExtractor={(item: { id: string }) => item.id}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{
              backgroundColor: '#9d49d3',
              height: 4,
            }}
            renderItem={({ item }: { item: CartState }) => (
              <Product
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Title>{item.quantity}</Title>
                <ProductTitle>{item.title}</ProductTitle>
                <Title>{formatValue(item.price)}</Title>
              </Product>
            )}
          />
        </ViewTest>
        {popup && (
          <>
            <TouchableWithoutFeedback onPress={handlePopup}>
              <DetailsPopUpOff />
            </TouchableWithoutFeedback>
            <DetailsPopUpOn>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Title
                  style={{
                    fontSize: 24,
                  }}
                >
                  PAGAMENTO
                </Title>
                <TouchableOpacity
                  onPress={handlePopup}
                  style={{
                    position: 'absolute',
                    right: 16,
                  }}
                >
                  <Icon name="minus" size={24} color="#9D49D3" />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  position: 'relative',
                  left: 16,
                  width: '90%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
              >
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
              </View>
              {paymentTypeState === 0 && (
                <InCash>
                  <Form onSubmit={() => {}}>
                    <Title>Desconto</Title>
                    <SmallInput
                      autoCorrect={false}
                      autoCapitalize="none"
                      name="name"
                      placeholder="5,0%"
                      returnKeyType="next"
                      onSubmitEditing={() => {}}
                    />
                  </Form>
                </InCash>
              )}
              {paymentTypeState === 1 && (
                <InTerm>
                  <Form onSubmit={() => {}}>
                    <Title>
                      {termQuantity}
                      {'  '}
                      parcelas de R$ 500,00
                    </Title>
                    <Slider
                      style={{ width: '90%', height: 40 }}
                      step={1}
                      onValueChange={termQuantity => {
                        handleTermQuantity(termQuantity)
                      }}
                      // onSlidingComplete={termQuantity => {
                      //   handleTermQuantity(termQuantity)
                      // }}
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
                          onSubmitEditing={() => {}}
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
                          onSubmitEditing={() => {}}
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
                          onSubmitEditing={() => {}}
                        />
                      </View>
                    </View>
                  </Form>
                </InTerm>
              )}
              {paymentTypeState === 2 && (
                <InTest>
                  <Title>Data Retorno</Title>
                  <Form onSubmit={() => {}}>
                    <SmallInput
                      autoCorrect={false}
                      autoCapitalize="none"
                      name="name"
                      placeholder="10/07/2020"
                      returnKeyType="next"
                      onSubmitEditing={() => {}}
                    />
                  </Form>
                </InTest>
              )}
              <Button
                style={{ marginTop: 72 }}
                icon="dollar-sign"
                iconColor="#FBFF38"
                onPress={() => {}}
              >
                Finalizar Venda
              </Button>
              <Image
                source={logoImg}
                style={{
                  flex: 1,
                  width: '100%',
                  resizeMode: 'center',
                }}
              />
            </DetailsPopUpOn>
          </>
        )}
        {qrcode && (
          <>
            <TouchableWithoutFeedback onPress={handlerQrcode}>
              <DetailsPopUpOff />
            </TouchableWithoutFeedback>
            <DetailsPopUpOn>
              <View
                style={{
                  // flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Title
                  style={{
                    fontSize: 25,
                  }}
                >
                  QRCODE
                </Title>
                <TouchableOpacity
                  onPress={handlerQrcode}
                  style={{
                    position: 'absolute',
                    right: 10,
                  }}
                >
                  <Icon name="minus" size={24} color="#9D49D3" />
                </TouchableOpacity>
              </View>
            </DetailsPopUpOn>
          </>
        )}
      </Container>
    </>
  )
}

export default Sells
