import React from 'react'

import styled from 'styled-components'

const phone = require('../common/assets/phone.png')
const telegram = require('../common/assets/telegram.png')
const logoTitle = require('../common/assets/Vector-Title.png')
const logo = require('../common/assets/Vector.png')
const viber = require('../common/assets/viber.png')

export const Header = () => {
  return (
    <SHeader>
      <SLogo>
        <img src={logo} alt="logo" />
        <img src={logoTitle} alt={'welbex'} />
      </SLogo>
      <Navbar>
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
      </Navbar>
      <SPhone>+7 555 555-55-55</SPhone>
      <SContacts>
        <img src={telegram} alt="telegram" />
        <img src={phone} alt="phone" />
        <img src={viber} alt="viber" />
      </SContacts>
    </SHeader>
  )
}
export const SLogo = styled.div`
  background-color: black;
  @media (max-width: 820px) {
    display: none;
  }
`

export const SContacts = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: red;
  width: 116px;
  @media (max-width: 970px) {
    display: none;
  }
`
export const Navbar = styled.nav`
  & ul {
    display: flex;
    justify-content: space-between;
    width: 503px;
    list-style: none;
  }

  @media (max-width: 670px) {
    width: 100%;
    & ul {
      width: 100%;
    }
  }
`

export const SHeader = styled.header`
  height: 73px;
  border: 1px solid darkviolet;
  background-color: midnightblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & div,
  & nav {
    //background-color: red;
  }
`

export const SHeaderLink = styled.a`
  font-family: 'Inter-Medium', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #e4e5ea;
  text-decoration: none;
`

export const SPhone = styled(SHeaderLink)`
  @media (max-width: 670px) {
    display: none;
  }
`
