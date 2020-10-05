import React, { useMemo } from 'react'
import { formatValue } from '../../utils'

import {
  Container,
  CardHeader,
  CardTitle,
  AddIcon,
  DeleteIcon,
  CardFooter,
  TextLabel,
  TextValue,
  MinusIcon,
  ActionsContainer,
  DeleteContainer,
  TotalContainer,
  ImageContainer,
  ProductImage,
} from './styles'
import { CardProps } from './types'

const Card: React.FC<CardProps> = ({
  card: { title, totalPrice, quantity, price, imageProduct },
  cardWidth,
  cardMargins,
}) => {
  const formattedTotalPrice = useMemo(() => {
    return formatValue(totalPrice)
  }, [totalPrice])
  const formattedPrice = useMemo(() => {
    return formatValue(price)
  }, [price])
  return (
    <Container
      style={{
        height: cardWidth * 1.777,
        width: cardWidth,
        margin: cardMargins,
        elevation: cardMargins,
        backgroundColor: 'white',
      }}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <DeleteContainer>
          <DeleteIcon />
        </DeleteContainer>
      </CardHeader>
      <ImageContainer>
        <TextValue>{formattedPrice}</TextValue>
        <ProductImage source={{ uri: imageProduct }} cardWidth={cardWidth} />
      </ImageContainer>
      <CardFooter>
        <ActionsContainer>
          <MinusIcon />
          <TextValue>{quantity}</TextValue>
          <AddIcon />
        </ActionsContainer>
        <TotalContainer>
          <TextValue>{formattedTotalPrice}</TextValue>
        </TotalContainer>
      </CardFooter>
    </Container>
  )
}

export default Card
