import React from 'react'

import { logo, logoTitle } from '../../../../common'
import { SLogo, SLogoDescr } from '../../../styles'

export const Logo = () => {
  return (
    <SLogo to={'*'}>
      <img src={logo} alt="logo" />
      <img src={logoTitle} alt={'welbex'} />
      <SLogoDescr>крупный интегратор CRM в России и еще 8 странах</SLogoDescr>
    </SLogo>
  )
}
