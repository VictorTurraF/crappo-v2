import React from 'react'
import styled from 'styled-components'

interface InsightItemProps {
  title: string
  description: string
  icon: React.ReactNode
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-basis: 335px;
`

const Icon = styled.div`

`

const TextSection = styled.div`
  flex: 1 0 0%;
  margin-left: 1.5rem;
`

const Title = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 150%;
`

const Description = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 28px;
  letter-spacing: 0.01em;
  font-weight: 400;
`

function InsightItem({ title, description, icon }: InsightItemProps) {
  return (
    <Row>
      <Icon>
        {icon}
      </Icon>
      <TextSection>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextSection>
    </Row>
  )
}

export default InsightItem