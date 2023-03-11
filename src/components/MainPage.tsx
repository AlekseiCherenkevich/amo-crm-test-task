import React from 'react'

import styled from 'styled-components'

export const MainPage = () => {
  return (
    <SMainPage>
      <SMainPageMotto>
        <h1>
          Зарабатывайте больше <b>с WELBEX</b>
        </h1>
        <p>Развиваем и контролируем продажи за вас</p>
      </SMainPageMotto>
      <SMainPageGifts>
        <h2>
          Вместе с <b>БЕСПЛАТНОЙ КОНСЦУЛЬТАЦИЕЙ</b> мы дарим:
        </h2>
        <div>
          <div>
            <h3>Виджеты</h3>
            <p>30 готовых решений</p>
          </div>
          <div>
            <h3>DASHBOARD</h3>
            <p>с показателями вашего бизнеса</p>
          </div>
          <div>
            <h3>SKYPE АУДИТ</h3>
            <p>отдела продаж и CRM системы</p>
          </div>
          <div>
            <h3>35 дней</h3>
            <p>использования CRM</p>
          </div>
        </div>
        <button>Получить консультацию</button>
      </SMainPageGifts>
    </SMainPage>
  )
}
const SMainPage = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: coral;
`
const SMainPageMotto = styled.div`
  max-width: 275px;
  background-color: burlywood;
`
const SMainPageGifts = styled.div`
  max-width: 262px;
  background-color: lightgrey;
`
