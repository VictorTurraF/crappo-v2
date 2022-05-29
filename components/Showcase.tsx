import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'

import BTCIcon from '../assets/icons/btc-icon.svg'
import ETHIcon from '../assets/icons/eth-icon.svg'
import LTCIcon from '../assets/icons/ltc-icon.svg'
import Container from './Container'

const Row = styled(Container)`
  display: flex;
  flex-direction: row;
  gap: 2.575rem;
`

const ProductCarColum = styled(ProductCard)`
  flex: 1 0 0%;
`

function Showcase() {
  return (
    <Row>
      <ProductCarColum
        icon={<BTCIcon />}
        cryptoName="Bitcoin"
        cryptoTicker='btc'
        description='Digital currency in which a record of transactions is maintained.'
        buttonText='Start Mining'
        theme='dark'
      />
      <ProductCarColum
        icon={<ETHIcon />}
        cryptoName="Ethereum"
        cryptoTicker='eth'
        description='Blockchain technology to create and run decentralized digital applications.'
      />
      <ProductCarColum
        icon={<LTCIcon />}
        cryptoName="Litecoin"
        cryptoTicker='ltc'
        description='Cryptocurrency that enables instant payments to anyone in the world.'
      />
    </Row>
  )
}

export default Showcase