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
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import Icon from 'react-native-vector-icons/Feather'

import { TouchableOpacity } from 'react-native-gesture-handler'
import formatValue from '../../utils/formatValue'
import logoImg from '../../assets/logo.png'
import SmallInput from '../../components/SmallInput'
import Button from '../../components/Button'

import {
  Container,
  SignOutButton,
  BackButton,
  SignOutButtonText,
  ClientHeader,
  FlatListHeader,
  FlatListHeaderText,
  TodayText,
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
  Checkbox,
  ViewTeste,
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

  function handlerPopup() {
    if (!popup) {
      setPopup(true)
      console.log('popup state?', popup)
    } else {
      setPopup(false)
      console.log('popup state?', popup)
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
              <BackButton onPress={() => navigation.goBack()}>
                <Icon name="menu" size={40} color="#9D49D3" />
                {/* <TodayText> 20/05/2020 </TodayText> */}
              </BackButton>
              <Image
                  source={logoImg}
                  style={{
                    flex: 1,
                    resizeMode: 'center',
                    flexDirection: 'row',
                    height: 64,
                    marginHorizontal: 4,
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
        <ViewTeste>
          <ProductList<any>
            data={data}
            keyExtractor={(item: { id: string }) => item.id}
            // contentContainerStyle={{flexGrow:0}}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{
              backgroundColor: '#ff0000',
              height: 48,
            }}
            renderItem={({ item }: { item: CartState }) => (
              <Product style={{ flex: 1, flexDirection: 'row' }}>
                <ProductTitle>{item.title}</ProductTitle>
                <Title>{formatValue(item.price)}</Title>
              </Product>
            )}
          />
        </ViewTeste>
        {popup && (
          <DetailsPopUp>
            <View>
              <Title>DETALHES</Title>
              <TouchableOpacity onPress={handlerPopup}>
                <Icon name="minus" size={24} color="#9D49D3" />
              </TouchableOpacity>
            </View>
            <Checkbox />
            <Text>À VISTA</Text>
            <Text>DESCONTO %</Text>
            <Checkbox />
            <Text>À PRAZO</Text>
          </DetailsPopUp>
        )}
        {qrcode && (
          <DetailsPopUp>
            <View>
              <Title>QRCODE</Title>
              <TouchableOpacity onPress={handlerQrcode}>
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
      <SignOutButton onPress={() => navigation.navigate('SignIn')}>
        <Icon name="log-out" size={24} color="#9D49D3" />
        <SignOutButtonText>Sair da conta</SignOutButtonText>
      </SignOutButton>
    </>
  )
}

export default Sells
