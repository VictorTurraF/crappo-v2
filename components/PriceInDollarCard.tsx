import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  position: absolute;
  top: 243px;
  right: 3.5rem;
  padding: 1rem 2rem;
  text-align: center;
  background: #491F98;
  border-radius: 1rem;
`

const Title = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.01em;
  margin: 0;
`

const Paragraph = styled.p`
  margin-top: .25rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #F2F2F2;
  margin-bottom: 0;
`

function PriceInDollarCard({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card className={className}>
      <Title>$15.32</Title>
      <Paragraph>Price in Dollar</Paragraph>
    </Card>
  )
}

export default PriceInDollarCard