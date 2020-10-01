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
} from './styles'
import { CardProps } from './types'

const Card: React.FC<CardProps> = ({
  card: { title, totalPrice, quantity, price },
  cardWith,
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
      <TextValue>{formattedPrice}</TextValue>
      {/* https://www.google.com/imgres?imgurl=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1o2yuX79E3KVjSZFGq6A19XXa5%2FLingerie-das-mulheres-adultas-calcinha-transparente-ver-atrav-s-de-pura-bunda-aberta-baixa-ascens-o.jpg&imgrefurl=https%3A%2F%2Fpt.aliexpress.com%2Fi%2F33021509925.html&tbnid=1RGLsXdm3cD1BM&vet=12ahUKEwjmwIeT45PsAhXsMLkGHbvIDRMQMygAegUIARCWAQ..i&docid=Ceb9Fm61jvcVsM&w=800&h=800&q=calcinha%20transparente&ved=2ahUKEwjmwIeT45PsAhXsMLkGHbvIDRMQMygAegUIARCWAQ */}
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
