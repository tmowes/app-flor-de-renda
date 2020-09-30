import React, { useState } from 'react'
import { Dimensions } from 'react-native'

import Card from '../../components/Card'
import { defaultCards } from './data'

import { Container, LeftColumn, RightColumn } from './styles'

const { width: wWidth } = Dimensions.get('window')

const CardsPageTest: React.FC = () => {
  const cardWith = (wWidth - 16 + 16) / 2
  const cardMargins = wWidth / 2 - cardWith - 16
  const [cards, setCards] = useState(defaultCards)

  return (
    <Container>
      {/* <LeftColumn>
        {cards
          .filter((_, index) => index % 2 !== 0)
          .map(card => (
            <Card key={card.id} {...{ card, cardWith, cardMargins }} />
          ))}
      </LeftColumn> */}
      <RightColumn>
        {cards
          // .filter((_, index) => index % 2 === 0)
          .map(card => (
            <Card key={String(card.id)} {...{ card, cardWith, cardMargins }} />
          ))}
      </RightColumn>
    </Container>
  )
}

export default CardsPageTest
