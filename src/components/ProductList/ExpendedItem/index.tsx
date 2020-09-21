import React, { useMemo } from 'react'
import { Text } from 'react-native'
import formatValue from '../../../utils/formatValue'

import { Container, ValueText } from './styles'
import { ExpendedItemProps } from './types'

const ExpendedItem: React.FC<ExpendedItemProps> = ({ price }) => {
  const formattedPrice = useMemo(() => {
    return formatValue(price)
  }, [price])
  return (
    <Container>
      <ValueText>Valor Unitário</ValueText>
      <ValueText>{formattedPrice}</ValueText>
    </Container>
  )
}

export default ExpendedItem
