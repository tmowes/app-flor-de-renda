import React, { useMemo } from 'react'
import formatValue from '../../../utils/formatValue'

import { Container, ValueText } from './styles'
import { ExpendedItemProps } from './types'

const ExpendedItem: React.FC<ExpendedItemProps> = ({ price, productLine }) => {
  const formattedPrice = useMemo(() => {
    return formatValue(price)
  }, [price])
  return (
    <Container>
      <ValueText> Unitário</ValueText>
      <ValueText>{formattedPrice}</ValueText>
      <ValueText>Unitário</ValueText>
      <ValueText>{productLine}</ValueText>
    </Container>
  )
}

export default ExpendedItem
