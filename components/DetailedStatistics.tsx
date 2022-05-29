import React from 'react'
import styled from 'styled-components'
import DetailedChart from './DetailedChart'
import MiniHero from './MiniHero'

const Box = styled.div``

function DetailedStatistics() {
  return (
    <Box>
      <DetailedChart />
      <MiniHero title="Detailed Statistics" paragraph='View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.' />
    </Box>
  )
}

export default DetailedStatistics