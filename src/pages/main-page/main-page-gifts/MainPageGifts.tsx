import React from 'react'

import {
  Button,
  SColoredText,
  SMainPageDescriptionText,
  SMainPageGifts,
  SMainPageGiftsItem,
  SMainPageGiftsItemsWrapper,
  SMainPageGiftsTitle,
  SMainPageGiftTitle,
} from '../styles'

const gifts = [
  { title: 'Виджеты', description: '30 готовых решений' },
  { title: 'DASHBOARD', description: 'с показателями вашего бизнеса' },
  { title: 'SKYPE АУДИТ', description: 'отдела продаж и CRM системы' },
  { title: '35 дней', description: 'использования CRM' },
]

export const MainPageGifts = () => {
  return (
    <SMainPageGifts>
      <SMainPageGiftsTitle>
        Вместе с <SColoredText font={'Inter-Medium'}>БЕСПЛАТНОЙ КОНСЦУЛЬТАЦИЕЙ</SColoredText> мы
        дарим:
      </SMainPageGiftsTitle>
      <SMainPageGiftsItemsWrapper>
        {gifts.map((g, index) => (
          <SMainPageGiftsItem key={index}>
            <SMainPageGiftTitle>{g.title}</SMainPageGiftTitle>
            <SMainPageDescriptionText>{g.description}</SMainPageDescriptionText>
          </SMainPageGiftsItem>
        ))}
      </SMainPageGiftsItemsWrapper>
      <Button>Получить консультацию</Button>
    </SMainPageGifts>
  )
}
