import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import InsightItem from './InsightItem'

import ChartIcon from '../assets/icons/chart.svg'
import UserIcon from '../assets/icons/user.svg'
import EarthIcon from '../assets/icons/earth.svg'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
`

function InsightsRow() {
  return (
    <Container>
      <Row>
        <InsightItem icon={<ChartIcon />} title="$30B" description="Digital Currency Exchanged" />
        <InsightItem icon={<UserIcon />} title="10M+" description="Trusted Wallets Investors" />
        <InsightItem icon={<EarthIcon />} title="195" description="Counties Supported" />
      </Row>
    </Container>
  )
}

export default InsightsRow