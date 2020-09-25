export interface CardProps {
  card: CardInfo
  cardWith: number
  cardMargins: number
  key: number
}

export interface CardInfo {
  id: number
  title: string
  price: number
  quantity: number
  totalPrice: number
  productLine: string
}
