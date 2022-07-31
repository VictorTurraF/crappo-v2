import React from 'react'
import styled from 'styled-components'
import ButtonComponent from '../../components/Button'
import cx from 'classnames'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`

const Button = styled(ButtonComponent)`
  padding: .5rem 1.5rem;
`

function Operations({ className = "", ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Row className={cx("op-button-group", className)} {...rest}>
      <Button style={{ backgroundColor: "#6EDCB5" }}>Buy</Button>
      <Button style={{ backgroundColor: "#FF325F" }}>Sell</Button>
    </Row>
  )
}

export default Operations