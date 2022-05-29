import React from 'react'
import styled from 'styled-components'
import ArrowUpIcon from '../assets/icons/arrow-up-icon.svg'

const Card = styled.div`
  position: absolute;
  left: 4rem;
  top: 243px;
  padding: 1.5rem 1rem;
  background: #491F98;
  backdrop-filter: blur(250px);
  border-radius: 1rem;
  max-width: 178px;
`

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 28px;
  letter-spacing: 0.01em;
`

const Rate = styled.div`
  margin-top: 1rem;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 29px;
  letter-spacing: 0.01em;
`

const Description = styled.div`
  margin-top: 1rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;
  letter-spacing: 0.01em;
  color: #F2F2F2;
`

function SellOptionCard({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card className={className} >
      <Title>Increase in Trade</Title>
      <Rate>+75% <ArrowUpIcon /></Rate>
      <Description>Sell option</Description>
    </Card>
  )
}

export default SellOptionCard