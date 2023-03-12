import React from 'react'

import { SFooter } from '../../styles'

import { FooterConfidentiality } from './footer-confidentiality'
import { FooterItems } from './footer-items'

export const Footer = () => {
  return (
    <SFooter>
      <FooterItems />
      <FooterConfidentiality />
    </SFooter>
  )
}
