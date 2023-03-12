import styled from 'styled-components'

export const SContainerWrapper = styled.div`
  padding: 0 14px 0 14px;
`

export const SApp = styled.div`
  position: relative;
  width: 100%;
  //min-height: 100vh;
  z-index: -100;
`

export const SContainer = styled.div`
  padding-top: 46px;
  position: relative;
  margin: 0 auto;
  width: 100%;
  //height: 100vh;
  min-height: 100vh;
  max-width: 1140px;
  //background-color: lightgrey;
  border: 1px solid lightgrey;
  @media (max-width: 870px) {
    height: fit-content;
    padding-top: 0;
  }
`

export const SLogo = styled.div`
  width: 160px;
  background-color: black;
  @media (max-width: 830px) {
    display: none;
  }
`

export const SLogoDescr = styled.p`
  //background-color: darkmagenta;
  border: 1px solid darkmagenta;
  font-family: 'Montserrat-Light', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  color: #e4e5ea;
`

export const SContacts = styled.div`
  display: flex;
  justify-content: space-between;
  //background-color: red;
  border: 1px solid red;
  width: 116px;
  @media (max-width: 970px) {
    display: none;
  }
`
export const SNavbar = styled.nav`
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
  @media (max-width: 500px) {
    & ul li:last-child {
      display: none;
    }
  }
`
export const SHeader = styled.header`
  height: 73px;
  //background-color: midnightblue;
  border: 1px solid midnightblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & div,
  & nav {
    //background-color: red;
  }
  @media (max-width: 870px) {
    height: 55px;
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
  @media (max-width: 405px) {
    font-size: 12px;
    text-transform: uppercase;
  }
`
export const SPhone = styled(SHeaderLink)`
  @media (max-width: 670px) {
    display: none;
  }
`
export const SFooterContacts = styled.div`
  margin: 22px 0 22px 0;
  width: 76px;
  display: flex;
  justify-content: space-between;
  //background-color: mediumvioletred;
  border: 1px solid mediumvioletred;
  @media (max-width: 430px) {
    margin: 22px 0 12px 0;
  }
`

export const SFooterLink = styled.a`
  font-family: 'Inter-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #e4e5ea;
  text-decoration: none;
  @media (max-width: 380px) {
    font-size: 13px;
  }
`

export const SFooterContact = styled(SFooterLink)`
  display: block;
  margin-top: 10px;
  background-color: blueviolet;
  border: 1px solid blueviolet;
  @media (max-width: 430px) {
    background-color: coral;
  }
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
  @media (max-width: 430px) {
    margin-top: 50px;
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
  @media (max-width: 430px) {
    background-color: blue;
    margin-top: 30px;
  }
`

export const SFooterLinksList = styled.ul`
  max-height: 165px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style-type: none;
  margin-right: 46px;
  & li {
    background-color: coral;
    border: 1px solid coral;
    margin-right: 52px;
    margin-top: 10px;
  }
  @media (max-width: 430px) {
    margin-right: 0;
    max-height: 265px;
    background-color: mediumvioletred;
    & li {
      margin-right: 0;
      height: 37px;
      width: 145px;
    }
  }
`
export const SFooterItemsWrapper = styled.div`
  position: relative;
  display: flex;
  min-height: 172px;
  & div:last-child {
    position: absolute;
    right: 0;
    //background-color: coral;
    border: 1px solid coral;
  }

  @media (max-width: 1020px) {
    flex-direction: column;

    & div:last-child {
      position: static;
    }
  }
`
export const SFooter = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
  //background-color: coral;
  border: 1px solid coral;
  @media (max-width: 1020px) {
    position: relative;
  }
`
