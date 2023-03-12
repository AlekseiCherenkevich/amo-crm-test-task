import React from 'react'

import { SFooterItemsWrapper, SFooterLink, SFooterLinksList, SFooterTitle } from '../../../styles'

import { FooterContacts } from './footer-contacts'

import { data } from '.'

const footerItems = data.map((i, index) => (
  <div key={index}>
    <SFooterTitle>{i.title}</SFooterTitle>
    <SFooterLinksList>
      {i.links.map((l, index) => (
        <li key={index}>
          <SFooterLink href="#">{l}</SFooterLink>
        </li>
      ))}
    </SFooterLinksList>
  </div>
))

export const FooterItems = () => {
  return (
    <SFooterItemsWrapper>
      {footerItems}
      <FooterContacts />
    </SFooterItemsWrapper>
  )
}
