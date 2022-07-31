import React from 'react'
import styled from 'styled-components'
import AssetSelector from './AssetSelector'
import LastPriceCell from './LastPriceCell'
import OpBarInfoCell from './OpBarInfoCell'
import OperationsComponent from './Operations'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;
  padding: 1.125rem 2.5rem;
`

const Operations = styled(OperationsComponent)`
  margin-left: auto;
`

function OperationsBar() {
  return (
    <Row>
      <AssetSelector />
      <LastPriceCell />
      <OpBarInfoCell infoValue='38.25 BTC' infoTitle='Volume (24h)' />
      <Operations />
    </Row>
  )
}

export default OperationsBar