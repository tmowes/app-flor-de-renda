export interface ProductListProps {
  id: string
  title: string
  price: number
  quantity: number
  totalPrice: number
  expendedToggle: (id: string) => void
  isOpen: boolean
}
