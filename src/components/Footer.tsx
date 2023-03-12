import React from 'react'

import styled from 'styled-components'

const phone = require('../common/assets/phone.png')
const telegram = require('../common/assets/telegram.png')
const viber = require('../common/assets/viber.png')

export const Footer = () => {
  return (
    <SFooter>
      <SFooterItemsWrapper>
        <div>
          <SFooterTitle>О КОМПАНИИ</SFooterTitle>
          <SFooterLinksList>
            <li>
              <SFooterLink href="#">Партнерская программа</SFooterLink>
            </li>
            <li>
              <SFooterLink href="#">Вакансии</SFooterLink>
            </li>
          </SFooterLinksList>
        </div>
        <div>
          <SFooterTitle>SFooterTitle</SFooterTitle>
          <SFooterLinksList>
            <li>
              <SFooterLink href="#">Расчет стоимости</SFooterLink>
            </li>
            <li>
              <SFooterLink href="#">Услуги</SFooterLink>
            </li>
            <li>
              <SFooterLink href="#">Виджеты</SFooterLink>
            </li>
            <li>
              <SFooterLink href="#">Интеграция</SFooterLink>
            </li>
            <li>
              <SFooterLink href="#">Наши клиенты</SFooterLink>
            </li>
            <li>
              <SFooterLink href="#">Кейсы</SFooterLink>
            </li>
            <li>
              <SFooterLink href="#">Благодарственные письм</SFooterLink>
            </li>
            <li>
              <SFooterLink href="#">Сертификаты</SFooterLink>
            </li>
            <li>
              <SFooterLink href="#">Блог на Youtube</SFooterLink>
            </li>
            <li>
              <SFooterLink href="#">Вопрос / Ответ</SFooterLink>
            </li>
          </SFooterLinksList>
        </div>
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
      </SFooterItemsWrapper>
      <SFooterConfidentiality>
        <p> @WELBEX 2022. Все права защищены</p>
        <a>Политика конфиденциальности</a>
      </SFooterConfidentiality>
    </SFooter>
  )
}

export const SFooterContacts = styled.div`
  margin: 22px 0 22px 0;
  width: 76px;
  display: flex;
  justify-content: space-between;
  //background-color: mediumvioletred;
  border: 1px solid mediumvioletred;
`

export const SFooterLink = styled.a`
  font-family: 'Inter-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #e4e5ea;
  text-decoration: none;
`

export const SFooterContact = styled(SFooterLink)`
  display: block;
  margin-top: 10px;
  //background-color: blueviolet;
  border: 1px solid blueviolet;
`

export const SFooterConfidentiality = styled.div`
  margin-top: 33px;
  height: 55px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
  //background-color: blueviolet;
  border: 1px solid blueviolet;
  p,
  a {
    font-family: 'Montserrat-Regular', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: right;
    color: #e4e5ea;
  }
`
export const SFooterTitle = styled.h4`
  font-family: Inter-Regular, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #656566;
`

export const SFooterLinksList = styled.ul`
  max-height: 165px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style-type: none;
  margin-right: 46px;
  & li {
    //background-color: coral;
    border: 1px solid coral;
    margin-right: 52px;
    margin-top: 10px;
  }
`
export const SFooterItemsWrapper = styled.div`
  position: relative;
  display: flex;
  height: 172px;
  & div:last-child {
    position: absolute;
    right: 0;
    //background-color: coral;
    border: 1px solid coral;
  }

  @media (max-width: 870px) {
    flex-direction: column;

    & div:last-child {
      position: static;
    }
  }
`
const SFooter = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
  //background-color: coral;
  border: 1px solid coral;
`
