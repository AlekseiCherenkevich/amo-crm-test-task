import styled from 'styled-components'

export const SMainPageGiftsItem = styled.div`
  height: 68px;
  width: 137px;
  border: 1px solid burlywood;
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
`
export const SMainPageDescriptionText = styled.p<{
  width?: string
  fontSize: string
  lineHeight: string
  textAlign?: string
}>`
  width: ${props => props.width};
  font-family: 'Montserrat-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  text-align: ${props => props.textAlign};
  color: #e4e5ea;
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

export const SMainPageGifts = styled.div`
  position: relative;
  max-width: 291px;
  height: 372px;
  //border: 1px solid lightgrey;
`

export const SMainPageGiftsTitle = styled.h3`
  font-family: 'Inter-Medium', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  color: #e4e5ea;
  //background-color: burlywood;
`

export const SMainPageGiftTitle = styled(SMainPageGiftsTitle)`
  letter-spacing: 0.05em;
  text-transform: uppercase;
`

export const SColoredText = styled.span<{ font: 'Inter-Black' | 'Inter-Medium' }>`
  //font-family: Inter-Black;
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
  background-color: #4077f3;
  font-family: 'Inter-Medium', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #e4e5ea;
  border: navajowhite;
  cursor: pointer;
`
