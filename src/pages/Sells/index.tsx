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
} from 'react-native'

import { CheckBox } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import Icon from 'react-native-vector-icons/Feather'

import formatValue from '../../utils/formatValue'
import logoImg from '../../assets/logo.png'
import SmallInput from '../../components/SmallInput'
import Button from '../../components/Button'

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
  DetailsPopUp,
  ViewTest,
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
  const navigation = useNavigation()
  const [popup, setPopup] = useState<boolean>(false)
  const [qrcode, setQrcode] = useState<boolean>(false)
  const [paymentTypeState, setPaymentTypeState] = useState<boolean>(false)

  function handlerPopup() {
    if (!popup) {
      setPopup(true)
      console.log('popup state?', popup)
    } else {
      setPopup(false)
      console.log('popup state?', popup)
    }
  }
  function handlerPaymentState() {
    if (!paymentTypeState) {
      setPaymentTypeState(true)
    } else {
      setPaymentTypeState(false)
    }
  }

  function handlerQrcode() {
    if (!qrcode) {
      setQrcode(true)
      console.log('popup state?', popup)
    } else {
      setQrcode(false)
      console.log('popup state?', popup)
    }
  }

  // useEffect(() => {
  //   async function loadProducts(): Promise<void> {
  //     // DONE LOAD PRODUCTS FROM ASYNC STORAGE
  //     const storageProducts = await AsyncStorage.getItem(
  //       '@AppFlorDeRenda:products',
  //     )
  //     if (storageProducts) {
  //       setProducts([...JSON.parse(storageProducts)])
  //     }
  //   }
  //   loadProducts()
  // }, [])

  // useEffect(() => {
  //   async function loadProducts(): Promise<void> {
  //     // DONE LOAD PRODUCTS FROM API
  //     const response = await api.get('/products')
  //     setProducts(response.data)
  //   }
  //   loadProducts()
  // }, [])

  return (
    <>
      {/* <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        > */}
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
              {/* navigation.goBack() */}
              <MenuButton onPress={() => navigation.openDrawer()}>
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
                <SmallInput
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
            <TouchableOpacity onPress={handlerPopup}>
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
              backgroundColor: '#730FC3',
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
          <DetailsPopUp>
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
                PAGAMENTO
              </Title>
              <TouchableOpacity
                onPress={handlerPopup}
                style={{
                  position: 'absolute',
                  right: 10,
                }}
              >
                <Icon name="minus" size={24} color="#9D49D3" />
              </TouchableOpacity>
            </View>
            <View>
              <CheckBox
                onPress={handlerPaymentState}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={paymentTypeState === false}
              />
              <Text>À VISTA</Text>
              <Text>DESCONTO %</Text>
              <Form onSubmit={() => {}}>
                <SmallInput
                  autoCorrect={false}
                  autoCapitalize="none"
                  name="name"
                  placeholder="Desconto"
                  // icon="user"
                  returnKeyType="next"
                  onSubmitEditing={() => {}}
                />
              </Form>
            </View>
            <View>
              <CheckBox
                onPress={handlerPaymentState}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={paymentTypeState === true}
              />
              <Text>À PRAZO</Text>
              <Form onSubmit={() => {}}>
                <SmallInput
                  autoCorrect={false}
                  autoCapitalize="none"
                  name="name"
                  placeholder="Prazo"
                  // icon="none"
                  returnKeyType="next"
                  onSubmitEditing={() => {}}
                />
              </Form>
            </View>
            <View>
              <CheckBox
                // onPress={handlerPaymentState}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                // checked={paymentTypeState === true}
              />
              <Text>MERCADORIA EM PROVA</Text>
              <Text>RETORNO</Text>
            </View>
          </DetailsPopUp>
        )}
        {qrcode && (
          <DetailsPopUp>
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
          </DetailsPopUp>
        )}
        {/* <Footer>
          <Button onPress={() => {}}>Adicionar Item</Button>
        </Footer> */}
      </Container>
      {/* </ScrollView>
      </KeyboardAvoidingView> */}
      {/* <SignOutButton onPress={() => navigation.navigate('SignIn')}>
        <Icon name="log-out" size={24} color="#9D49D3" />
        <SignOutButtonText>Sair da conta</SignOutButtonText>
      </SignOutButton> */}
    </>
  )
}

export default Sells
