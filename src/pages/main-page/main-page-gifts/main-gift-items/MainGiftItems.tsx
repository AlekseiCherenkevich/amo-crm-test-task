import React from 'react'

import { gifts, mediaGifts } from '../../data'
import { useDetectScreenWidth } from '../../hooks'
import {
  SMainPageDescriptionText,
  SMainPageGiftsItem,
  SMainPageGiftsItemsWrapper,
  SMainPageGiftTitle,
} from '../../styles'

export const MainGiftItems = () => {
  const width = useDetectScreenWidth()

  console.log(width)

  return (
    <SMainPageGiftsItemsWrapper>
      {width > 370 &&
        gifts.map((g, index) => (
          <SMainPageGiftsItem key={index}>
            <SMainPageGiftTitle>{g.title}</SMainPageGiftTitle>
            <SMainPageDescriptionText>{g.description}</SMainPageDescriptionText>
          </SMainPageGiftsItem>
        ))}
      {width <= 370 &&
        mediaGifts.map((g, index) => (
          <SMainPageGiftsItem key={index}>
            <SMainPageGiftTitle>{g.title}</SMainPageGiftTitle>
          </SMainPageGiftsItem>
        ))}
    </SMainPageGiftsItemsWrapper>
  )
}
