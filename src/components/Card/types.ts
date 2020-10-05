import { SellsSheetProps } from '../../pages/Sells/types'

export interface CardProps {
  card: SellsSheetProps
  cardWidth: number
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
  imageProduct: string
}

export interface productImageProps {
  cardWidth: number
}
