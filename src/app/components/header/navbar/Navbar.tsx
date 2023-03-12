import React from 'react'

import { SHeaderLink, SNavbar, SNavlink } from '../../../styles'
export const Navbar = () => {
  return (
    <SNavbar>
      <ul>
        <li>
          <SNavlink to={'/*'}>Услуги</SNavlink>
        </li>
        <li>
          <SNavlink to={'/time'}>Виджеты</SNavlink>
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
