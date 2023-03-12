import styled from 'styled-components'

export const SMainPageGiftsItem = styled.div`
  position: relative;
  height: 68px;
  width: 145px;
  @media (max-width: 380px) {
    display: flex;
    align-items: center;
    height: 30px;
    h3 {
      margin-left: 20px;
    }
    &:before {
      content: '';
      width: 15px;
      height: 3px;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      position: absolute;
      background: linear-gradient(92deg, #fcb045 27.14%, #ff3f78 121.36%), #e4e5ea;
    }
  }
`
export const SMainPageMotto = styled.div`
  max-width: 362px;
  width: 100%;
  min-height: 248px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 380px) {
    min-height: fit-content;
  }
`
export const SMainPageMottoTitle = styled.h1`
  font-family: 'Inter-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 58px;
  color: #e4e5ea;
  @media (max-width: 380px) {
    font-size: 40px;
    line-height: 44px;
  }
  @media (max-width: 330px) {
    font-size: 36px;
  }
`

export const SMainPageDescriptionText = styled.p`
  font-family: 'Montserrat-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: right;
  color: #e4e5ea;
`

export const SMainPageMottoDescriptionText = styled(SMainPageDescriptionText)`
  font-size: 18px;
  line-height: 22px;
  width: 340px;
  text-align: left;
  @media (max-width: 380px) {
    margin-top: 15px;
  }
`

export const SMainPageGiftsItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 267px;
  padding: 40px 0 61px 0;
  @media (max-width: 380px) {
    height: 70px;
    padding: 0;
    margin-top: 20px;
    margin-bottom: 59px;
  }
`
export const SMainPage = styled.div`
  padding-top: 84px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 870px) {
    padding-top: 40px;
  }
`

export const SMainPageGifts = styled.div`
  position: relative;
  max-width: 291px;
  height: 372px;
  margin-bottom: 20px;
  @media (max-width: 380px) {
    margin-top: 45px;
    height: fit-content;
  }
`
export const SMainPageGiftsTitle = styled.h3`
  font-family: 'Inter-Medium', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  color: #e4e5ea;
`

export const SMainPageGiftTitle = styled(SMainPageGiftsTitle)`
  letter-spacing: 0.05em;
  text-transform: uppercase;
  @media (max-width: 380px) {
    font-size: 13px;
  }
`
export const SColoredText = styled.span<{ font: 'Inter-Black' | 'Inter-Medium' }>`
  font-family: ${props => props.font};
  background: linear-gradient(92deg, #fcb045 27.14%, #ff3f78 121.36%), #e4e5ea;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const Button = styled.button`
  position: absolute;
  right: 0;
  width: 262px;
  height: 61px;
  font-family: 'Inter-Medium', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #e4e5ea;
  border: navajowhite;
  cursor: pointer;
  background-color: #4077f3;
  @media (max-width: 380px) {
    display: none;
  }
`
