export interface ProductListProps {
  id: string
  title: string
  price: number
  quantity: number
  totalPrice: number
  expandedToggle: (id: string) => void
  isOpen: boolean
  productLine: string
}
