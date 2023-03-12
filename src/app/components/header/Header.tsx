import React from 'react'

import { SHeader, SPhone } from '../../styles'

import { Contacts } from './contacts'
import { Logo } from './logo'
import { Navbar } from './navbar'
export const Header = () => {
  return (
    <SHeader>
      <Logo />
      <Navbar />
      <SPhone>+7 555 555-55-55</SPhone>
      <Contacts />
    </SHeader>
  )
}
