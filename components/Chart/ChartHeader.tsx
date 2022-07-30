import React from 'react'
import styled from 'styled-components'
import InfoCell from './InfoCell'
import TrendInfoCell from './TrendInfoCell'
import UserInfoCell from './UserInfoCell'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1.125rem 2.5rem;
  background: #35068C;
  border-radius: 0px 16px 16px 0px;
  gap: 2.5rem;
  min-width: 730px;
`

function ChartHeader() {
  return (
    <Row>
      <TrendInfoCell percentage={7.3} variationAmount={146} />
      <InfoCell infoValue="$82856.00" infoTitle="Total amount" />
      <InfoCell infoValue="$51234.31" infoTitle="High" />
      <InfoCell infoValue="$1531.80" infoTitle="Low" />
      <UserInfoCell userName="Andriy Lenin" />
    </Row>
  )
}

export default ChartHeader