export interface SellsSheetProps {
  id: string
  title: string
  price: number
  quantity: number
  totalPrice: number
  productLine: string
}

export interface ProductsSheetProps {
  id: string
  description: string
  size: string
  line: string
  gender: string
  type: string
  reference: string
  minimumQuantity: number
  maximumQuantity: number
}
