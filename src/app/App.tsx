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
  height: 100vh;
`
const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  max-width: 1140px;
  background-color: lightgrey;
`
