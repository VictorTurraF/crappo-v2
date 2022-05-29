import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  max-width: 740px;
  margin: 0 auto;
  text-align: center;
`

const Title = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 150%;
`

const SubTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 150%;
  color: #E0E0E0;
  max-width: 622px;
  margin: 0 auto;
`

function CenteredTitle({ title = '', subtitle = '', className = '' }) {
  return (
    <Box className={className}>
      {!!title && title !== '' && (<Title>{title}</Title>)}
      {!!subtitle && subtitle !== '' && (<SubTitle>{subtitle}</SubTitle>)}
    </Box>
  )
}

export default CenteredTitle