import React from 'react'

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
} from './styles'
import { CardProps } from './types'

const Card: React.FC<CardProps> = ({
  card: { title, totalPrice, quantity, price },
  cardWith,
  cardMargins,
}) => {
  return (
    <Container
      style={{
        height: cardWith * 1.777,
        width: cardWith,
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
      <TextValue>{price}</TextValue>
      <CardFooter>
        <ActionsContainer>
          <MinusIcon />
          <TextValue>{quantity}</TextValue>
          <AddIcon />
        </ActionsContainer>
        <TotalContainer>
          <TextValue>{totalPrice}</TextValue>
        </TotalContainer>
      </CardFooter>
    </Container>
  )
}

export default Card
