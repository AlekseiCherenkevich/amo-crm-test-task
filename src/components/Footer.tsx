import React from 'react'

import styled from 'styled-components'

export const Footer = () => {
  return (
    <SFooterTitle>
      <div>
        <div>
          <h4>О КОМПАНИИ</h4>
          <ul>
            <li>Партнерская программа</li>
            <li>Вакансии</li>
          </ul>
        </div>
        <div>
          <h4>МЕНЮ</h4>
          <ul>
            <li>Расчет стоимости</li>
            <li>Услуги</li>
            <li>Виджеты</li>
            <li>Интеграция</li>
            <li>Наши клиенты</li>
            <li>Кейсы</li>
            <li>Благодарственные письм</li>
            <li>Сертификаты</li>
            <li>Блог на Youtube</li>
            <li>Вопрос / Ответ</li>
          </ul>
        </div>
        <div>
          <h4>Контакты</h4>
          <p>+7 555 555-55-55</p>
          <div> + + + </div>
          <p>Москва, Путевой проезд 3с1, к 902</p>
        </div>
      </div>
      <div>
        <p> @WELBEX 2022. Все права защищены</p>
        <a>Политика конфиденциальности</a>
      </div>
    </SFooterTitle>
  )
}

export const SFooterTitle = styled.h4`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #656566;
`
