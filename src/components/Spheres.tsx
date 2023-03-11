import React from 'react'

import styled from 'styled-components'

export const Spheres = () => {
  return (
    <>
      <PurpleBall></PurpleBall>
      <RedBall></RedBall>
      <SmallRedBall></SmallRedBall>
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
`
const RedBall = styled.div`
  position: absolute;
  left: 519px;
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
`
const SmallRedBall = styled(RedBall)`
  top: 547px;
  left: 851px;
  width: 28px;
  height: 28px;
  filter: blur(2.5px);
`
