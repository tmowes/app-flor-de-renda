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

import Slider from '@react-native-community/slider'
import { CheckBox } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage'
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
  DetailsPopUp,
  ViewTest,
  InTest,
  InCash,
  InTerm,
} from './styles'
import { data } from '../../temp/products'
import api from '../../services/api'

interface CartState {
  id: string
  title: string
  price: number
  quantity: number
}

const Buys: React.FC = () => {
  const [products, setProducts] = useState<CartState[]>([])
  const navigation = useNavigation()
  const [popup, setPopup] = useState<boolean>(false)

  function handlerPopup() {
    if (!popup) {
      setPopup(true)
      console.log('popup state?', popup)
    } else {
      setPopup(false)
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
              <MenuButton
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              >
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
              <TouchableOpacity onPress={handlerPopup}>
                <Icon name="plus-circle" size={30} color="#9D49D3" />
              </TouchableOpacity>
            </View>
          </ClientHeader>
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
          <TouchableOpacity
            onPress={handlerPopup}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              // backgroundColor: 'red',
            }}
          >
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
                    fontSize: 24,
                  }}
                >
                  ADICIONAR ITENS
                </Title>
                <TouchableOpacity
                  onPress={handlerPopup}
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
              />
              <InTerm>
                <Form onSubmit={() => {}}>
                  <Title>2 parcelas de R$ 500,00</Title>
                  <Slider
                    style={{ width: '100%', height: 40 }}
                    step={1}
                    value={2}
                    minimumValue={1}
                    maximumValue={6}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#730fc3"
                    onValueChange={(value: number) => <Text>{value}</Text>}
                  />
                  <View
                    style={{
                      flex: 1,
                      position: 'absolute',
                      top: 60,
                      width: '100%',
                      // backgroundColor: 'red',
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
              <Button
                style={{ marginTop: 72 }}
                icon="plus-circle"
                iconColor="#FBFF38"
                onPress={() => {}}
              >
                Adicionar Itens
              </Button>
            </DetailsPopUp>
          </TouchableOpacity>
        )}
      </Container>
    </>
  )
}

export default Buys
