import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'

const Box = styled.div`
  font-weight: 400;
  font-size: .675rem;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #BDBDBD;
`

function InfoMeta({ children, className = "", ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Box className={cx("info-meta", className)} {...rest}>
      {children}
    </Box>
  )
}

export default InfoMeta