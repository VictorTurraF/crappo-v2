import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'

const Box = styled.div`
  font-weight: 500;
  font-size: .875rem;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #fff;
`

function InfoValue({ children, className = "", ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Box className={cx("info-value", className)} {...rest}>
      {children}
    </Box>
  )
}

export default InfoValue