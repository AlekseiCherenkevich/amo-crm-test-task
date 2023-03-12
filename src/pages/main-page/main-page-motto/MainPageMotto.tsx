import React from 'react'

import { SColoredText, SMainPageDescriptionText, SMainPageMotto } from '../styles'

export const MainPageMotto = () => {
  return (
    <SMainPageMotto>
      <h1>
        Зарабатывайте больше <SColoredText font={'Inter-Black'}>с WELBEX</SColoredText>
      </h1>
      <SMainPageDescriptionText width={'340px'} fontSize={'18px'} lineHeight={'22px'}>
        Развиваем и контролируем продажи за вас
      </SMainPageDescriptionText>
    </SMainPageMotto>
  )
}
