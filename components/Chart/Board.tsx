import React from 'react'
import styled, { css } from 'styled-components'
import GridVector from '../../assets/charts/btc-candles-grid.svg'
import Candles from '../../assets/charts/btc-candles.svg'

const Box = styled.div`
  padding: 1rem 2.5rem 1.5rem;
  display: grid;
  grid-template-areas: 
    "chart price"
    "time empty";
  grid-template-columns: 583px auto;
`

const Area = styled.div`
  grid-area: chart;
  position: relative;

  .candles {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

const PriceScale = styled.div`
  grid-area: price;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const legendStyle = css`
  font-weight: 500;
  font-size: .625rem;
  line-height: 1rem;
  color: #FFFFFF;
  opacity: 0.4;
`

const PriceUnit = styled.div`
  flex: 1 0 0%;

  ${legendStyle}
`

const TimeScale = styled.div`
  margin-top: 1.25rem;
  grid-area: time;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
`

const TimeUnit = styled.div`
  flex: 1 0 0%;
  text-align: center;

  ${legendStyle}
`

const prices = [
  1600,
  1500,
  1450,
  1400,
  1350,
]

const months = [
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

function Board() {
  return (
    <Box>
      <Area>
        <GridVector />
        <Candles className="candles"/>
      </Area>
      <PriceScale>
        {prices.map((price, index) => (
          <PriceUnit key={index}>{`$${price}`}</PriceUnit>
        ))}
      </PriceScale>
      <TimeScale>
        {months.map((month, index) => (
          <TimeUnit key={index}>{month}</TimeUnit>
        ))}
      </TimeScale>
    </Box>
  )
}

export default Board