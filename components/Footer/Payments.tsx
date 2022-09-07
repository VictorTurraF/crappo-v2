import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { FooterPaymentsHeader } from './FooterHeading'

const Box = styled.div`
  max-width: 355px;
`

const CardsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-top: 2.5rem;
`

function Payments() {
  return (
    <Box>
      <FooterPaymentsHeader
        theme='light'
        level='h3'
      >
        We accept following payment systems
      </FooterPaymentsHeader>
      <CardsRow>
        <Image width={96} height={64} src="/images/payments/visa.png" alt="Visa" />
        <Image width={96} height={64} src="/images/payments/mastercard.png" alt="Mastercard" />
        <Image width={96} height={64} src="/images/payments/bitcoin.png" alt="Bitcoin" />
      </CardsRow>
    </Box>
  )
}

export default Payments