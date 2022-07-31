import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'
import OpBarInfoCell from './OpBarInfoCell'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .5rem;
`

const Percentage = styled.div`
  color: #42FFFF;
  font-family: 'Rubik';
  font-weight: 400;
  font-size: .625rem;
  line-height: 150%;
  letter-spacing: 0.01em;
`

function LastPriceCell({ className = "", ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Row className={cx('last-price--info-cell', className)} {...rest}>
      <OpBarInfoCell infoValue='$6278.13' infoTitle='Last Price' />
      <Percentage>+2.74%</Percentage>
    </Row>
  )
}

export default LastPriceCell