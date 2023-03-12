import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { MainPage } from '../pages'
import { Time } from '../time'

import { Footer, Header, Spheres } from './components'
import { SApp, SContainer, SContainerWrapper } from './styles'

export const App = () => {
  return (
    <SApp>
      <SContainerWrapper>
        <SContainer>
          <Header />
          {/*<MainPage />*/}
          <Routes>
            <Route path={'/*'} element={<MainPage />} />
            <Route path={'/time'} element={<Time />} />
          </Routes>
          <Footer />
        </SContainer>
      </SContainerWrapper>
      <Spheres />
    </SApp>
  )
}
