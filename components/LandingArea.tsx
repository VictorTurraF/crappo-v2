import React from 'react'
import styled from 'styled-components'
import Hero from './Hero'

const ContainerBox = styled.div`
  position: relative;
  flex: 1 0 0%;
`

const Ilustration = styled.div`
  position: absolute;
`

function LandingArea() {
  return (
    <ContainerBox>
      <Ilustration />
      <Hero />
    </ContainerBox>
  )
}

export default LandingArea