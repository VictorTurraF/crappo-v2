import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'
import InfoMeta from './InfoMeta'
import InfoValueComponent from './InfoValue'
import UpIcon from '../../assets/icons/chart-up-icon.svg'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Icon = styled.div`
  margin-right: .5rem;
`

const Percentage = styled.div`
  color: #42FFFF;
`

const VariationAmount = styled.div`
  font-weight: 400;
  margin-left: .25rem;
`

const InfoValue = styled(InfoValueComponent)`
  display: flex;
  flex-direction: row;
`

export interface TrendInfoCellProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  percentage: number,
  variationAmount: number,
}

function TrendInfoCell({ className = "", percentage, variationAmount, ...rest }: TrendInfoCellProps) {
  return (
    <Row>
      <Icon>
        <UpIcon />
      </Icon>
      <Box className={cx("info-value", className)} {...rest}>
        <InfoValue>
          <Percentage>
            {percentage > 0
              ? `+${String(percentage)}%`
              : `-${String(percentage)}%`
            }
          </Percentage>
          <VariationAmount>
            {variationAmount > 0
              ? `(+$${String(variationAmount)})`
              : `(-$${String(variationAmount)})`
            }
          </VariationAmount>
        </InfoValue>
        <InfoMeta>Trends</InfoMeta>
      </Box>
    </Row>
  )
}

export default TrendInfoCell