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
} from './styles'
import { data } from '../../temp/products'
import api from '../../services/api'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface CartState {
  id: string
  title: string
  price: number
  quantity: number
}

const Sells: React.FC = () => {
  const [products, setProducts] = useState<CartState[]>([])
  const navigation = useNavigation()
  const [popup, setPopup] = useState(false)

  function handlerPopup({popup}) {
    if(!popup) {setPopup(true)
    }else{setPopup(true)
    };
  };

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

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      // DONE LOAD PRODUCTS FROM API
      const response = await api.get('/products')
      setProducts(response.data)
    }
    loadProducts()
  }, [])

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
                <Icon name="chevron-left" size={24} color="#9D49D3" />
                <TodayText> 20/05/2020 </TodayText>
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
              </BackButton>
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
            <FlatListHeaderText> ITENS </FlatListHeaderText>
            <TouchableOpacity onPress={() =>{handlerPopup({popup})}}>
              <FlatListHeaderText>DETALHES </FlatListHeaderText>
            </TouchableOpacity>
          </FlatListHeader>
        </Header>
        <ProductList<any>
          data={data}
          keyExtractor={(item: { id: string }) => item.id}
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
        {popup && (
          <DetailsPopUp>
          <Title>DETALHES</Title>
          <Checkbox />
          <Text>À VISTA</Text>
          <Text>DESCONTO %</Text>
          <Checkbox />
          <Text>À PRAZO</Text>
          <TouchableOpacity onpress={() =>{handlerPopup({popup})}} ><Icon name="minus" size={24} color="#9D49D3"/></TouchableOpacity>
        </DetailsPopUp>
        )}
        <Footer>
          <Button onPress={() => {}}>Adicionar Item</Button>
        </Footer>
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
