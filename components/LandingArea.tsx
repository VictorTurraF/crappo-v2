import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import Hero from './Hero'
import Illustration from './Illustration'

const SectionBox = styled.div`
  position: relative;
  flex: 1 0 0%;
`

const HeroContainer = styled(Container)`
  position: relative;
`

function LandingArea() {
  return (
    <SectionBox>
      <HeroContainer>
        <Illustration />
        <Hero />
      </HeroContainer>
    </SectionBox>
  )
}

export default LandingArea