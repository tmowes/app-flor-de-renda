import { SellsSheetProps } from '../../pages/Sells/types'

export interface CardProps {
  card: SellsSheetProps
  cardWith: number
  cardMargins: number
  key: string
}

export interface CardInfo {
  id: number
  title: string
  price: number
  quantity: number
  totalPrice: number
  productLine: string
}
