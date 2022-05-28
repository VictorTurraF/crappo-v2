import React from 'react'
import Container from './Container'
import IllustrationImage from '../assets/illustrations/Illustration-2.svg'
import styled from 'styled-components'
import Button from './Button'

const Illustration = styled.div`
`

const ContainerRow = styled(Container)`
  display: flex;
  padding: 4rem 0 0;
`

const TextSection = styled.div`
  max-width: 480px;
  margin-left: auto;
`

const Title = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 150%;
`

const Paragraph = styled.p`
  max-width: 408px;
  color: #E0E0E0;
  font-weight: 400;
  font-size: 1rem;
  line-height: 28px;
`

function DescriptionRow() {
  return (
    <ContainerRow>
      <Illustration>
        <IllustrationImage />
      </Illustration>
      <TextSection>
        <Title>Why you should use CRAPPO</Title>
        <Paragraph>
          Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.
        </Paragraph>
        <Button>Learn More</Button>
      </TextSection>
    </ContainerRow>
  )
}

export default DescriptionRow