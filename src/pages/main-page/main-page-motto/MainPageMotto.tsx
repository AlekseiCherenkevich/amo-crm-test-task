import React from 'react'

import {
  SColoredText,
  SMainPageMotto,
  SMainPageMottoDescriptionText,
  SMainPageMottoTitle,
} from '../styles'

export const MainPageMotto = () => {
  return (
    <SMainPageMotto>
      <SMainPageMottoTitle>
        Зарабатывайте больше <SColoredText font={'Inter-Black'}>с WELBEX</SColoredText>
      </SMainPageMottoTitle>
      <SMainPageMottoDescriptionText>
        Развиваем и контролируем продажи за вас
      </SMainPageMottoDescriptionText>
    </SMainPageMotto>
  )
}
