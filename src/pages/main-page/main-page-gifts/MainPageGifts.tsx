import React from 'react'

import { Button, SMainPageGifts } from '../styles'

import { MainGiftItems } from './main-gift-items'
import { MainPageGiftsTitle } from './main-gifts-title'

export const MainPageGifts = () => {
  return (
    <SMainPageGifts>
      <MainPageGiftsTitle />
      <MainGiftItems />
      <Button>Получить консультацию</Button>
    </SMainPageGifts>
  )
}
