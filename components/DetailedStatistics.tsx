import React from 'react'
import styled from 'styled-components'
import DetailedChartComponent from './DetailedChart'
import MiniHeroComponent from './MiniHero'

const Box = styled.div``

const DetailedChart = styled(DetailedChartComponent)`
  display: inline-block;
`


const MiniHero = styled(MiniHeroComponent)`
  display: inline-block;
  margin-left: 89px;
`

function DetailedStatistics() {
  return (
    <Box>
      <DetailedChart />
      <MiniHero
        title="Detailed Statistics"
        paragraph={`
          View all mining related information in realtime, at any point at any location 
          and decide which polls you want to mine in.
        `}
      />
    </Box>
  )
}

export default DetailedStatistics