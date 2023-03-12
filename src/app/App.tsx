import React from 'react'

import { MainPage } from '../pages'

import { Footer, Header, Spheres } from './components'
import { SApp, SContainer, SContainerWrapper } from './styles'

export const App = () => {
  return (
    <SApp>
      <SContainerWrapper>
        <SContainer>
          <Header />
          <MainPage />
          <Footer />
        </SContainer>
      </SContainerWrapper>
      <Spheres />
    </SApp>
  )
}
