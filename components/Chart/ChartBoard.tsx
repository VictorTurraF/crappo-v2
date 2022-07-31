import React from 'react'
import styled from 'styled-components'
import Board from './Board'
import OperationsBar from './OperationsBar'

const Box = styled.div`
  background: #35068C;
  border-radius: 0px 16px 16px 0px;
  overflow: hidden;
  margin-top: .5rem;
`

function ChartBoard() {
  return (
    <Box>
      <OperationsBar />
      <Board />
    </Box>
  )
}

export default ChartBoard