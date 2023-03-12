import React from 'react'

import { SHeaderLink, SNavbar } from '../../../styles'

export const Navbar = () => {
  return (
    <SNavbar>
      <ul>
        <li>
          <SHeaderLink href="#">Услуги</SHeaderLink>
        </li>
        <li>
          <SHeaderLink href="#">Виджеты</SHeaderLink>
        </li>
        <li>
          <SHeaderLink href="#">Интеграции</SHeaderLink>
        </li>
        <li>
          <SHeaderLink href="#">Кейсы</SHeaderLink>
        </li>
        <li>
          <SHeaderLink href="#">Сертификаты</SHeaderLink>
        </li>
      </ul>
    </SNavbar>
  )
}
