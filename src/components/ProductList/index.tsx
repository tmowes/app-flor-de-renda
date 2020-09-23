import React, { useMemo } from 'react'
import { View } from 'react-native'
import formatValue from '../../utils/formatValue'
import ExpendedItem from './ExpendedItem'

import { Product, ProductRow, ProductTitle, Title } from './styles'

import { ProductListProps } from './types'

const ProductList: React.FC<ProductListProps> = ({
  id,
  price,
  title,
  quantity,
  totalPrice,
  isOpen,
  expendedToggle,
  productLine,
}) => {
  const formattedTotalPrice = useMemo(() => {
    return formatValue(totalPrice)
  }, [totalPrice])

  return (
    <>
      <Product onPress={() => expendedToggle(id)}>
        <ProductRow>
          <Title>{quantity}</Title>
          <ProductTitle>{title}</ProductTitle>
          <Title>{formattedTotalPrice}</Title>
        </ProductRow>
        <View>{isOpen && <ExpendedItem {...{ price, productLine }} />}</View>
      </Product>
    </>
  )
}

export default ProductList
