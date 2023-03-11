import React from 'react'

import styled from 'styled-components'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MainPage } from '../components/MainPage'
import { Spheres } from '../components/Spheres'

export const App = () => {
  return (
    <SApp>
      <Container>
        <Header />
        <MainPage />
        <Footer />
      </Container>
      <Spheres />
    </SApp>
  )
}
const SApp = styled.div`
  position: relative;
  background-color: #0e1014;
  width: 100%;
`
const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1140px;
  background-color: lightgrey;
`
