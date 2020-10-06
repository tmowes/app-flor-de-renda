import React, { useCallback, useMemo } from 'react'
import { formatValue } from '../../utils'
import ButtonIconContainer from '../ButtonIconContainer'

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
  card: { id, title, totalPrice, quantity, price, imageProduct },
  cardWidth,
  cardMargins,
}) => {
  const formattedTotalPrice = useMemo(() => {
    return formatValue(totalPrice)
  }, [totalPrice])
  const formattedPrice = useMemo(() => {
    return formatValue(price)
  }, [price])
  const handleDeleteCard = useCallback((cardId: string) => {
    console.log('delete', cardId)
  }, [])
  const handleQuantityChange = useCallback((value: number) => {
    console.log({ value })
  }, [])
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
          <ButtonIconContainer onPress={() => handleDeleteCard(id)}>
            <DeleteIcon />
          </ButtonIconContainer>
        </DeleteContainer>
      </CardHeader>
      <ImageContainer>
        <TextValue>{formattedPrice}</TextValue>
        <ProductImage source={{ uri: imageProduct }} cardWidth={cardWidth} />
      </ImageContainer>
      <CardFooter>
        <ActionsContainer>
          <ButtonIconContainer onPress={() => handleQuantityChange(-1)}>
            <MinusIcon />
          </ButtonIconContainer>
          <TextValue>{quantity}</TextValue>
          <ButtonIconContainer onPress={() => handleQuantityChange(1)}>
            <AddIcon />
          </ButtonIconContainer>
        </ActionsContainer>
        <TotalContainer>
          <TextValue>{formattedTotalPrice}</TextValue>
        </TotalContainer>
      </CardFooter>
    </Container>
  )
}

export default Card
