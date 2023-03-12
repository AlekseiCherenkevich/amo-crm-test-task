import React from 'react'

import { SColoredText, SMainPageMotto, SMainPageMottoDescriptionText } from '../styles'

export const MainPageMotto = () => {
  return (
    <SMainPageMotto>
      <h1>
        Зарабатывайте больше <SColoredText font={'Inter-Black'}>с WELBEX</SColoredText>
      </h1>
      <SMainPageMottoDescriptionText>
        Развиваем и контролируем продажи за вас
      </SMainPageMottoDescriptionText>
    </SMainPageMotto>
  )
}
