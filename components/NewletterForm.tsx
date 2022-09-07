import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Container from './Container'
import Typography from './Typography'

const Box = styled(Container)`
  
`

const Frame = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #3671E9;
  border-radius: 16px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 348px;
`

const Title = styled(Typography.Heading)``
const Paragraph = styled(Typography.Paragraph)`
  color: #fff;
`

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  min-width: 566px;
`

const TextInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background-color: transparent;
  
  flex: 1 0 0%;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 28px;
  color: #fff;
  padding: .5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, .4);

  &::placeholder {
    opacity: .8;
  }
`

function NewletterForm() {
  return (
    <Box>
      <Frame>
        <Column>
          <Title level='h3' theme="light">Start mining now</Title>
          <Paragraph theme="light">
            Join now with CRAPPO to get the latest news and start mining now
          </Paragraph>
        </Column>
        <Form>
          <TextInput placeholder='Enter your email' />
          <Button variant='light'>Subscribe</Button>
        </Form>
      </Frame>
    </Box>
  )
}

export default NewletterForm