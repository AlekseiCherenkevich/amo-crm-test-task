import React from 'react'

import styled from 'styled-components'

export const MainPage = () => {
  return (
    <SMainPage>
      <SMainPageMotto>
        <h1>
          Зарабатывайте больше <SColoredText>с WELBEX</SColoredText>
        </h1>
        <p>Развиваем и контролируем продажи за вас</p>
      </SMainPageMotto>
      <SMainPageGifts>
        <h2>
          Вместе с <SColoredText>БЕСПЛАТНОЙ КОНСЦУЛЬТАЦИЕЙ</SColoredText> мы дарим:
        </h2>
        <SMainPageGiftsItemsWrapper>
          <SMainPageGiftsItem>
            <h3>Виджеты</h3>
            <p>30 готовых решений</p>
          </SMainPageGiftsItem>
          <SMainPageGiftsItem>
            <h3>DASHBOARD</h3>
            <p>с показателями вашего бизнеса</p>
          </SMainPageGiftsItem>
          <SMainPageGiftsItem>
            <h3>SKYPE АУДИТ</h3>
            <p>отдела продаж и CRM системы</p>
          </SMainPageGiftsItem>
          <SMainPageGiftsItem>
            <h3>35 дней</h3>
            <p>использования CRM</p>
          </SMainPageGiftsItem>
        </SMainPageGiftsItemsWrapper>
        <Button>Получить консультацию</Button>
      </SMainPageGifts>
    </SMainPage>
  )
}

export const SMainPageGiftsItem = styled.div`
  height: 68px;
  width: 137px;
  //background-color: burlywood;
  border: 1px solid burlywood;
  h3 {
    font-family: 'Inter-Medium', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: right;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #e4e5ea;
  }
  p {
    font-family: 'Montserrat-Regular', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: right;
    color: #e4e5ea;
  }
`

export const SMainPageGiftsItemsWrapper = styled.div`
  //background-color: mediumvioletred;
  border: 1px solid mediumvioletred;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 267px;
  padding: 40px 0 61px 0;
`

export const SMainPage = styled.div`
  padding-top: 84px;
  display: flex;
  justify-content: space-between;
  //background-color: coral;
  border: 1px solid coral;
  @media (max-width: 670px) {
    //background-color: navajowhite;
    border: 1px solid navajowhite;
  }
`
export const SMainPageMotto = styled.div`
  max-width: 362px;
  //background-color: mediumvioletred;
  border: 1px solid mediumvioletred;
  height: 248px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-family: 'Inter-Regular', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;
    color: #e4e5ea;
  }
  p {
    width: 340px;
    font-family: 'Montserrat-Regular', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #e4e5ea;
  }
`

export const SMainPageGifts = styled.div`
  max-width: 291px;
  height: 372px;
  //background-color: lightgrey;
  border: 1px solid lightgrey;
  h2 {
    font-family: 'Inter-Medium', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: right;
    color: #e4e5ea;
  }
`

export const SColoredText = styled.span`
  background: linear-gradient(92deg, #fcb045 27.14%, #ff3f78 121.36%), #e4e5ea;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const Button = styled.button`
  width: 262px;
  height: 61px;
  background-color: #4077f3;
  font-family: 'Inter-Medium', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #e4e5ea;
  border: navajowhite;
`
