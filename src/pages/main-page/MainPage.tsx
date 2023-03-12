import React from 'react'

import { MainPageGifts } from './main-page-gifts'
import { MainPageMotto } from './main-page-motto'
import { SMainPage } from './styles'

export const MainPage = () => {
  return (
    <SMainPage>
      <MainPageMotto />
      <MainPageGifts />
    </SMainPage>
  )
}
