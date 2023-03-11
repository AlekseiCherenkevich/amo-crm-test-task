import React from 'react'

import styled from 'styled-components'

export const Header = () => {
  return (
    <SHeader>
      <div>logo</div>
      <Navbar>
        <ul>
          <li>Услуги</li>
          <li>Услуги</li>
          <li>Услуги</li>
          <li>Услуги</li>
          <li>Услуги</li>
        </ul>
      </Navbar>
      <div>+33333333</div>
      <div>social media</div>
    </SHeader>
  )
}

export const Navbar = styled.nav`
  & ul {
    display: flex;
    list-style: none;
  }
`
export const SHeader = styled.header`
  height: 73px;
  border: 1px solid darkviolet;
  background-color: moccasin;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & div,
  & nav {
    background-color: red;
  }
`
