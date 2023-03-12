import React from 'react'

import { phone, telegram, viber } from '../../../../common'
import { SContacts } from '../../../styles'

export const Contacts = () => {
  return (
    <SContacts>
      <img src={telegram} alt="telegram" />
      <img src={phone} alt="phone" />
      <img src={viber} alt="viber" />
    </SContacts>
  )
}
