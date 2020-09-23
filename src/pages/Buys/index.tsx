import React, { useCallback, useEffect, useState } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'

import Slider from '@react-native-community/slider'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import axios from 'axios'

import {
  ENV_SPREADSHEET_URL,
  ENV_GOOGLE_KEY,
  ENV_SPREADSHEET_ID,
} from '../../secrets/env.json'

import ProductList from '../../components/ProductList'
import logoImg from '../../assets/logo.png'
import SmallInput from '../../components/SmallInput'
import Button from '../../components/Button'

import {
  Container,
  MenuButton,
  ClientHeader,
  Header,
  Title,
  DetailsPopUp,
  BuysScrollView,
  InTerm,
  MenuIcon,
  AddIcon,
  RemoveIcon,
} from './styles'
import { BuysSheetProps } from './types'

const Buys: React.FC = () => {
  const { dispatch } = useNavigation()
  const [popup, setPopup] = useState<boolean>(false)
  const [sheetData, setSheetData] = useState<BuysSheetProps[]>([])
  const [openedItems, setOpenedItems] = useState<string[]>([])

  useEffect(() => {
    async function loadData(): Promise<void> {
      const sheetName = 'BuysDataDev'
      const sheetRange = 'A2:F24'
      const { data } = await axios.get(
        `${ENV_SPREADSHEET_URL}/${ENV_SPREADSHEET_ID}/values/${sheetName}!${sheetRange}?key=${ENV_GOOGLE_KEY}`,
      )
      const result = data.values.map((item: BuysSheetProps[]) => {
        return {
          id: `${item[0]}${item[1]}`,
          title: item[1],
          size: item[2],
          price: Number(item[3]),
          quantity: Number(item[4]),
          totalPrice: Number(item[3]) * Number(item[4]),
          productLine: item[5],
        }
      })
      setSheetData(result)
    }
    loadData()
  }, [])

  const handlerPopup = useCallback(() => {
    if (!popup) {
      setPopup(true)
      console.log('popup state?', popup)
    } else {
      setPopup(false)
      console.log('popup state?', popup)
    }
  }, [popup])

  const handleExpandedToggle = useCallback(
    (id: string) => {
      const alreadyOpen = openedItems.includes(id)
      if (alreadyOpen) {
        const filteredItems = openedItems.filter(item => item !== id)
        setOpenedItems(filteredItems)
      } else {
        setOpenedItems([...openedItems, id])
      }
    },
    [openedItems],
  )

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
                <MenuIcon />
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
                <AddIcon />
              </TouchableOpacity>
            </View>
          </ClientHeader>
        </Header>
        <BuysScrollView>
          {sheetData &&
            sheetData.map(
              ({ id, price, title, quantity, totalPrice, productLine }) => (
                <ProductList
                  key={id}
                  expandedToggle={itemId => handleExpandedToggle(itemId)}
                  isOpen={!!openedItems.includes(id)}
                  {...{ id, price, title, quantity, totalPrice, productLine }}
                />
              ),
            )}
        </BuysScrollView>
        {popup && (
          <TouchableOpacity
            onPress={handlerPopup}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
            }}
          >
            <DetailsPopUp>
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
                  ADICIONAR ITENS
                </Title>
                <TouchableOpacity
                  onPress={handlerPopup}
                  style={{
                    position: 'absolute',
                    right: 16,
                  }}
                >
                  <RemoveIcon />
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
                <Form onSubmit={() => true}>
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
              <Button
                style={{ marginTop: 72 }}
                icon="plus-circle"
                iconColor="#FBFF38"
                onPress={() => true}
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
