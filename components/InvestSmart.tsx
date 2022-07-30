import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import MiniHeroComponent from './MiniHero'
import ChartComponent from './Chart'

const Box = styled(Container)`
  margin-top: 6.25rem;
  margin-bottom: 6.25rem;
`

const MiniHero = styled(MiniHeroComponent)`
  display: inline-block;
`

const Chart = styled(ChartComponent)`
  margin-left: 6.25rem;
`

function InvestSmart() {
  return (
    <Box>
      <MiniHero
        title="Invest Smart"
        paragraph='Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.'
      />
      <Chart />
    </Box>
  )
}

export default InvestSmart