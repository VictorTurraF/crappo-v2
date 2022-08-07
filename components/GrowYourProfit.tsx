import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import CryptoTable from './Table/CryptoTable'
import MiniHero from './MiniHero'

const Box = styled(Container)`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  margin-top: 7.5rem;
  justify-content: space-between;
`

function GrowYourProfit() {
  return (
    <Box>
      <MiniHero 
        title="Grow your profit and track your investments"
        paragraph="Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments."
      />
      <CryptoTable />
    </Box>
  )
}

export default GrowYourProfit