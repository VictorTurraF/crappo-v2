import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'
import InfoMeta from './InfoMeta'
import InfoValue from './InfoValue'

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export interface InfoCellProps extends React.HTMLAttributes<HTMLDivElement> {
  infoValue: string,
  infoTitle: string
}

function InfoCell({ className = "", infoValue, infoTitle, ...rest }: InfoCellProps) {
  return (
    <Box className={cx("info-box", className)} {...rest}>
      <InfoValue>{infoValue}</InfoValue>
      <InfoMeta>{infoTitle}</InfoMeta>
    </Box>
  )
}

export default InfoCell