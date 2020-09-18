import React, { useMemo } from 'react'
import formatValue from '../../utils/formatValue'
import ExpendedItem from './ExpendedItem'

import { Product, ProductRow, ProductTitle, Title } from './styles'

import { ProductListProps } from './types'

const ProductList: React.FC<ProductListProps> = ({
  price,
  title,
  quantity,
}) => {
  const formattedPrice = useMemo(() => {
    return formatValue(price)
  }, [price])

  return (
    <Product>
      <ProductRow>
        <Title>{quantity}</Title>
        <ProductTitle>{title}</ProductTitle>
        <Title>{formattedPrice}</Title>
      </ProductRow>
      <ExpendedItem />
    </Product>
  )
}

export default ProductList
