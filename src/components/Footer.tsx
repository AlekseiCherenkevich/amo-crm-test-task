import React from 'react'

import styled from 'styled-components'

export const Footer = () => {
  return (
    <SFooter>
      <SFooterItemsWrapper>
        <div>
          <SFooterTitle>О КОМПАНИИ</SFooterTitle>
          <SFooterLinksList>
            <li>Партнерская программа</li>
            <li>Вакансии</li>
          </SFooterLinksList>
        </div>
        <div>
          <SFooterTitle>SFooterTitle</SFooterTitle>
          <SFooterLinksList>
            <li>
              <a href="#">Расчет стоимости</a>
            </li>
            <li>
              <a href="#">Услуги</a>
            </li>
            <li>
              <a href="#">Виджеты</a>
            </li>
            <li>
              <a href="#">Интеграция</a>
            </li>
            <li>
              <a href="#">Наши клиенты</a>
            </li>
            <li>
              <a href="#">Кейсы</a>
            </li>
            <li>
              <a href="#">Благодарственные письм</a>
            </li>
            <li>
              <a href="#">Сертификаты</a>
            </li>
            <li>
              <a href="#">Блог на Youtube</a>
            </li>
            <li>
              <a href="#">Вопрос / Ответ</a>
            </li>
          </SFooterLinksList>
        </div>
        <div>
          <SFooterTitle>Контакты</SFooterTitle>
          <p>+7 555 555-55-55</p>
          <div> + + + </div>
          <p>Москва, Путевой проезд 3с1, к 902</p>
        </div>
      </SFooterItemsWrapper>
      <div>
        <p> @WELBEX 2022. Все права защищены</p>
        <a>Политика конфиденциальности</a>
      </div>
    </SFooter>
  )
}

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
  height: 100px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style-type: none;
  //background-color: red;
  margin-right: 46px;
  & li {
    background-color: coral;
    margin-right: 52px;
  }
`

export const SFooterItemsWrapper = styled.div`
  position: relative;
  display: flex;
  & div:last-child {
    position: absolute;
    right: 0;
    background-color: coral;
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
`
