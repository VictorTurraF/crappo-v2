import React from 'react'
import styled from 'styled-components'
import DownIcon from '../../assets/icons/chart-down-icon.svg'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const AssetName = styled.div`
  font-weight: 700;
  font-size: .875rem;
`

const Icon = styled.div`
  margin-left: .5rem;
  display: flex;
  align-items: center;
`


function AssetSelector() {
  return (
    <Row>
      <AssetName>USD/BTC</AssetName>
      <Icon><DownIcon /></Icon>
    </Row>
  )
}

export default AssetSelector