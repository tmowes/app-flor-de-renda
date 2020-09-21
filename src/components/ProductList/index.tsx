import React, { useMemo } from 'react'
import formatValue from '../../utils/formatValue'
import ExpendedItem from './ExpendedItem'

import { Product, ProductRow, ProductTitle, Title } from './styles'

import { ProductListProps } from './types'

const ProductList: React.FC<ProductListProps> = ({
  price,
  title,
  quantity,
  totalPrice,
}) => {
  const formattedTotalPrice = useMemo(() => {
    return formatValue(totalPrice)
  }, [totalPrice])

  return (
    <Product>
      <ProductRow>
        <Title>{quantity}</Title>
        <ProductTitle>{title}</ProductTitle>
        <Title>{formattedTotalPrice}</Title>
      </ProductRow>
      <ExpendedItem {...{ price }} />
    </Product>
  )
}

export default ProductList
