import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import MiniHero from './MiniHero'

const Box = styled(Container)`
  margin-top: 6.25rem;
`

function InvestSmart() {
  return (
    <Box>
      <MiniHero
        title="Invest Smart"
        paragraph='Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.'
      />
    </Box>
  )
}

export default InvestSmart