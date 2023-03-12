import React from 'react'

import { phone, telegram, viber } from '../../../../../common'
import { SFooterContact, SFooterContacts, SFooterTitle } from '../../../../styles'

export const FooterContacts = () => {
  return (
    <div>
      <SFooterTitle>Контакты</SFooterTitle>
      <SFooterContact>+7 555 555-55-55</SFooterContact>
      <SFooterContacts>
        <img src={telegram} alt="telegram" />
        <img src={phone} alt="phone" />
        <img src={viber} alt="viber" />
      </SFooterContacts>
      <SFooterContact>Москва, Путевой проезд 3с1, к 902</SFooterContact>
    </div>
  )
}
