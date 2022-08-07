import React from 'react'
import styled from 'styled-components'
import DownIcon from '../../assets/icons/table-down-icon.svg'
import UpIcon from '../../assets/icons/chart-up-icon.svg'

const Row = styled.div`
  display: flex;
  align-items: center;
`

export interface PercentageProps {
  isPositive?: boolean,
}

export interface CryptoChangeProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  percentage: number
}

const Icon = styled.div`
  margin-right: .5rem;
`
const Percentage = styled.div<PercentageProps>`
  color: ${props => props.isPositive ? '#8FFFBE' : '#FF7676'};
`

function CryptoChange({ percentage }: CryptoChangeProps) {
  return (
    <Row>
      <Icon>
        {percentage > 0 ? <UpIcon /> : <DownIcon />}
      </Icon>
      <Percentage isPositive={percentage > 0}>
        {percentage > 0 && "+"}{percentage}%
      </Percentage>
    </Row>
  )
}

export default CryptoChange