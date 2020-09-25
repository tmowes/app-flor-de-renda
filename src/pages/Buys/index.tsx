import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import axios from 'axios'

import {
  ENV_SPREADSHEET_URL,
  ENV_GOOGLE_KEY,
  ENV_SPREADSHEET_ID,
} from '../../secrets/env.json'

import Modal from '../../components/Modal'
import ProductList from '../../components/ProductList'

import {
  Container,
  MenuButton,
  ClientHeader,
  Header,
  BuysScrollView,
  MenuIcon,
  AddIcon,
  AddButton,
  LogoImage,
  ClientContent,
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

  const handleModal = useCallback(() => {
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
            <ClientContent>
              <MenuButton onPress={() => dispatch(DrawerActions.openDrawer())}>
                <MenuIcon />
              </MenuButton>
              <LogoImage />
              <AddButton onPress={handleModal}>
                <AddIcon />
              </AddButton>
            </ClientContent>
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
        {popup && <Modal modalTitle="adicionar items" {...{ handleModal }} />}
      </Container>
    </>
  )
}

export default Buys
