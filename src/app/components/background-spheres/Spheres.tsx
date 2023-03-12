import React from 'react'

import styled from 'styled-components'

export const Spheres = () => {
  return (
    <>
      <PurpleBall></PurpleBall>
      <RedBall></RedBall>
      <SmallRedBall></SmallRedBall>
      <BigBall></BigBall>
    </>
  )
}
const PurpleBall = styled.div`
  position: absolute;
  top: 2px;
  left: 868px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: radial-gradient(
    64% 64% at 27.25% 26.5%,
    rgba(236, 208, 255, 0.64) 0%,
    rgba(161, 93, 207, 0.24) 59.67%,
    rgba(118, 49, 164, 0.208) 78.59%,
    rgba(86, 24, 128, 0.232) 100%
  );
  box-shadow: 3px 6px 27px -10px rgba(177, 118, 217, 0.25);
  filter: blur(5px);
  backdrop-filter: blur(2px);
  @media (max-width: 1000px) {
    right: 50px;
    left: auto;
  }
  z-index: -10;
`
const RedBall = styled.div`
  position: absolute;
  right: 672px;
  top: 83px;
  background: radial-gradient(
    64% 64% at 27.25% 26.5%,
    rgba(255, 208, 208, 0.536) 0%,
    rgba(212, 93, 93, 0.264) 59.67%,
    rgba(167, 49, 49, 0.248) 78.59%,
    rgba(130, 25, 25, 0.248) 100%
  );
  box-shadow: 3px 6px 27px -10px rgba(223, 125, 125, 0.25);
  backdrop-filter: blur(2px);
  border-radius: 50%;
  width: 83px;
  height: 83px;
  @media (max-width: 880px) {
    right: auto;
    left: 100px;
  }
  z-index: -10;
`
const SmallRedBall = styled(RedBall)`
  top: 547px;
  left: 851px;
  width: 28px;
  height: 28px;
  filter: blur(2.5px);
  @media (max-width: 1000px) {
    right: 100px;
    left: auto;
  }
  z-index: -10;
`

const BigBall = styled.div`
  position: absolute;
  right: 80%;
  top: 251px;
  width: 311px;
  height: 311px;
  border-radius: 50%;
  background: #961a1a;
  opacity: 0.5;
  filter: blur(196px);
`
