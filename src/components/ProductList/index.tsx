import React, { useMemo } from 'react'
import formatValue from '../../utils/formatValue'

import { Product, ProductTitle, Title } from './styles'

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
      <Title>{quantity}</Title>
      <ProductTitle>{title}</ProductTitle>
      <Title>{formattedPrice}</Title>
    </Product>
  )
}

export default ProductList
