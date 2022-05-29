import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Typography from './Typography'

const Box = styled.div`
  max-width: 454px;
`

const Title = styled(Typography.Heading)``

const Paragraph = styled(Typography.Paragraph)`
  margin-top: 1.5rem;
  max-width: 408px;
`

const CTA = styled(Button)`
  margin-top: 2rem;
`

export interface MiniHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  paragraph: string
}

function MiniHero({ className, title, paragraph }: MiniHeroProps) {
  return (
    <Box className={className}>
      <Title level="h3" theme="light">{title}</Title>
      <Paragraph>{paragraph}</Paragraph>
      <CTA>Learn More</CTA>
    </Box>
  )
}

export default MiniHero