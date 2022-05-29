import React from 'react'
import styled from 'styled-components'
import Icon from '../assets/icons/mini-btc-icon.svg'
import ChartDesign from '../assets/charts/btc-chart.svg'
import SellOptionCard from './SellOptionCard'
import PriceInDollarCard from './PriceInDollarCard'

const Panel = styled.div`
  display: inline-block;
  background: #35068C;
  padding: 2.5rem 2.5rem 3rem;
  border-radius: 1rem;
  position: relative;
  top: -2.5rem;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`

const CryptoIcon = styled.div`
  margin-right: 1rem;
`

const CryptoInfo = styled.div``

const CryptoName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.875rem;
  margin-bottom: .25rem;
`

const Ticker = styled.div`
  display: inline;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #CFCFCF;
  opacity: 0.7;
  text-transform: uppercase;
`

const CryptoPrice = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: .857rem;
  line-height: 17px;
  letter-spacing: 0.01em;
  color: #F2F2F2;
`

const CryptoChange = styled.div`
  margin-left: auto;
  font-style: normal;
  font-weight: 500;
  font-size: .875rem;
  line-height: 17px;
  text-align: right;
  letter-spacing: 0.01em;
  color: #42FFFF;
`

const ChartContainer = styled.div`
  margin-top: 1.5rem;
`

function Chart({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Panel className={className}>
      <Header>
        <CryptoIcon>
          <Icon />
        </CryptoIcon>
        <CryptoInfo>
          <CryptoName>Bitcoin{' '}<Ticker>btc</Ticker></CryptoName>
          <CryptoPrice>0.00080 BTC</CryptoPrice>
        </CryptoInfo>
        <CryptoChange>+125%</CryptoChange>
      </Header>
      <ChartContainer>
        <ChartDesign />
      </ChartContainer>
      <SellOptionCard />
      <PriceInDollarCard />
    </Panel>
  )
}

export default Chart