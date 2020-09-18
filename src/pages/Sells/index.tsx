import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
  Image,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'

import Slider from '@react-native-community/slider'
import { CheckBox } from 'react-native-elements'
import axios from 'axios'

import { useNavigation, DrawerActions } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import Icon from 'react-native-vector-icons/Feather'

import {
  ENV_SPREADSHEET_URL,
  ENV_GOOGLE_KEY,
  ENV_SPREADSHEET_ID,
} from '../../secrets/env.json'

import ProductList from '../../components/ProductList'
import logoImg from '../../assets/logo.png'
import SmallInput from '../../components/SmallInput'
import Button from '../../components/Button'
import TinyInput from '../../components/TinyInput'

import {
  Container,
  ClientHeader,
  FlatListHeader,
  FlatListHeaderText,
  Header,
  CartHeader,
  OrderQuantity,
  OrderValue,
  Title,
  OrdersTitle,
  DetailsPopUpOn,
  InTest,
  InCash,
  InTerm,
  DetailsPopUpOff,
  BuysScrollView,
  MenuButton,
} from './styles'
import { SellsSheetProps } from './types'
import formatValue from '../../utils/formatValue'

const Sells: React.FC = () => {
  const { dispatch } = useNavigation()
  const [popup, setPopup] = useState<boolean>(false)
  const [qrcode, setQrcode] = useState<boolean>(false)
  const [sheetData, setSheetData] = useState<SellsSheetProps[]>([])
  const [paymentTypeState, setPaymentTypeState] = useState<number>(0)
  const [termQuantity, setTermQuantity] = useState<number>(2)

  useEffect(() => {
    async function loadData(): Promise<void> {
      const sheetName = 'SellsDataDev'
      const sheetRange = 'A2:E24'
      const { data } = await axios.get(
        `${ENV_SPREADSHEET_URL}/${ENV_SPREADSHEET_ID}/values/${sheetName}!${sheetRange}?key=${ENV_GOOGLE_KEY}`,
      )
      const result = data.values.map((item: SellsSheetProps[]) => {
        return {
          id: `${item[0]}${item[1]}`,
          title: item[1],
          size: item[2],
          price: Number(item[3]),
          quantity: Number(item[4]),
          totalPrice: Number(item[3]) * Number(item[4]),
        }
      })
      setSheetData(result)
    }
    loadData()
  }, [])

  const sellsPrices = sheetData.map(sell => sell.totalPrice)
  const totalSells = sellsPrices.reduce(
    (accumulator, current) => accumulator + current,
    0,
  )
  const formattedTotalSells = useMemo(() => {
    return formatValue(totalSells)
  }, [totalSells])

  const sellsQuantity = sheetData.map(sell => sell.quantity)
  const totalQuantity = sellsQuantity.reduce(
    (accumulator, current) => accumulator + current,
    0,
  )

  const handleTermQuantity = useCallback((value: number) => {
    setTermQuantity(value)
  }, [])

  const handlePopup = useCallback(() => {
    if (!popup) {
      setPopup(true)
    } else {
      setPopup(false)
    }
  }, [popup])

  const handlePaymentState = useCallback((checkBoxId: number) => {
    if (checkBoxId === 0) {
      setPaymentTypeState(0)
    } else if (checkBoxId === 1) {
      setPaymentTypeState(1)
    } else if (checkBoxId === 2) {
      setPaymentTypeState(2)
    }
  }, [])

  const handlerQrcode = useCallback(() => {
    if (!qrcode) {
      setQrcode(true)
    } else {
      setQrcode(false)
    }
  }, [qrcode])

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
              <Form onSubmit={() => true}>
                <TinyInput
                  autoCorrect={false}
                  autoCapitalize="none"
                  name="name"
                  placeholder="Cliente"
                  icon="user"
                  returnKeyType="next"
                  onSubmitEditing={() => true}
                />
              </Form>
            </View>
          </ClientHeader>
          <CartHeader>
            <OrderQuantity>
              <OrdersTitle>Quantidade</OrdersTitle>
              <OrdersTitle>{totalQuantity}</OrdersTitle>
            </OrderQuantity>
            <OrderValue>
              <OrdersTitle>Total</OrdersTitle>
              <OrdersTitle>{formattedTotalSells}</OrdersTitle>
            </OrderValue>
          </CartHeader>
          <FlatListHeader>
            <TouchableOpacity onPress={handlerQrcode}>
              <Icon name="plus-circle" size={30} color="#9D49D3" />
            </TouchableOpacity>
            <FlatListHeaderText>PEDIDO</FlatListHeaderText>
            <TouchableOpacity onPress={handlePopup}>
              <Icon name="shopping-cart" size={30} color="#9D49D3" />
            </TouchableOpacity>
          </FlatListHeader>
        </Header>
        <BuysScrollView>
          {sheetData &&
            sheetData.map(({ id, price, title, quantity }) => (
              <ProductList key={id} {...{ id, price, title, quantity }} />
            ))}
        </BuysScrollView>
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
