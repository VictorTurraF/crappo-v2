import React from 'react'
import styled from 'styled-components'
import InfoCellComponent, { InfoCellProps } from './InfoCell'

const InfoCell = styled(InfoCellComponent)`
  .info-value {
    font-size: .75rem;
    font-weight: 400;
  }

  .info-meta {
    font-size: .5rem;
    font-weight: 400;
  }
`

function OpBarInfoCell(props: InfoCellProps) {
  return (
    <InfoCell {...props} />
  )
}

export default OpBarInfoCell