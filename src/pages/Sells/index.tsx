import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import axios from 'axios'

import {
  ENV_SPREADSHEET_URL,
  ENV_GOOGLE_KEY,
  ENV_SPREADSHEET_ID,
} from '../../secrets/env.json'

import ProductList from '../../components/ProductList'
import TinyInput from '../../components/TinyInput'

import {
  Container,
  ClientHeader,
  ClientContent,
  MenuIcon,
  LogoImage,
  FlatListHeader,
  FlatListHeaderText,
  Header,
  CartHeader,
  OrderQuantity,
  OrderValue,
  OrdersTitle,
  BuysScrollView,
  MenuButton,
  AddButton,
  CartButton,
  AddIcon,
  CartIcon,
} from './styles'
import { SellsSheetProps } from './types'
import formatValue from '../../utils/formatValue'
import ModalQRCode from '../../components/ModalQRCode'
import Modal from '../../components/Modal'

const Sells: React.FC = () => {
  const { dispatch } = useNavigation()
  const [popup, setPopup] = useState<boolean>(false)
  const [qrcode, setQrcode] = useState<boolean>(false)

  const [sheetData, setSheetData] = useState<SellsSheetProps[]>([])
  const [openedItems, setOpenedItems] = useState<string[]>([])

  useEffect(() => {
    async function loadData(): Promise<void> {
      const sheetName = 'SellsDataDev'
      const sheetRange = 'A2:F24'
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
          productLine: item[5],
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

  const handleModal = useCallback(() => {
    if (!popup) {
      setPopup(true)
    } else {
      setPopup(false)
    }
  }, [popup])

  const handleQrcode = useCallback(() => {
    if (!qrcode) {
      setQrcode(true)
    } else {
      setQrcode(false)
    }
  }, [qrcode])

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
            <ClientContent>
              <MenuButton onPress={() => dispatch(DrawerActions.openDrawer())}>
                <MenuIcon />
              </MenuButton>
              <LogoImage />
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
            </ClientContent>
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
            <AddButton onPress={handleQrcode}>
              <AddIcon />
            </AddButton>
            <FlatListHeaderText>PEDIDO</FlatListHeaderText>
            <CartButton onPress={handleModal}>
              <CartIcon />
            </CartButton>
          </FlatListHeader>
        </Header>
        <BuysScrollView>
          {sheetData.map(
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
        {popup && <Modal modalTitle="pagamento" {...{ handleModal }} />}
        {qrcode && <ModalQRCode modalTitle="qrcode" {...{ handleQrcode }} />}
      </Container>
    </>
  )
}

export default Sells
