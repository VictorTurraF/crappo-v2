import React from 'react'
import styled, { css } from 'styled-components'
import Button from './Button'

import ArrowIcon from '../assets/icons/mini-right-arrow.svg';

const CardBox = styled.div`
  padding: 3rem 1.5rem;
  border-radius: 1rem;
  overflow: hidden;
  text-align: center;

  ${({ theme }) => theme === 'dark' && css`
    background-color: #2B076E;
    color: #fff;
  `}

  ${({ theme }) => theme === 'light' && css`
    background-color: #fff;
    color: #0D0D2B;
  `}

`
const Icon = styled.div``
const Title = styled.div`
  margin-top: 2rem;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  text-align: center;
`
const Ticker = styled.span`
  margin-left: .5rem;
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 150%;
  text-align: center;
  opacity: 0.7;
  text-transform: uppercase;
  vertical-align: middle;
`
const Description = styled.div`
  margin-top: 1rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 28px;
  letter-spacing: 0.01em;
`

const CTA = styled(Button)`
  margin: 1.5rem auto;
`

const CircleButton = styled.button`
  margin: 1.5rem auto;
  border: 2px solid rgba(43, 7, 110, 0.2);
  background-color: #fff;
  padding: .5rem;
  border-radius: 50rem;
`

export interface CryptoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  cryptoName: string
  cryptoTicker: string
  description: string
  buttonText?: string
  theme?: 'dark' | 'light'
}

function CryptoCard({
  className = '',
  icon = '',
  cryptoName = '',
  cryptoTicker = '',
  description = '',
  buttonText = '',
  theme = 'light'
}: CryptoCardProps) {
  return (
    <CardBox className={className} theme={theme}>
      <Icon>{icon}</Icon>
      {!!cryptoName && cryptoName !== '' && (
        <Title>
          {cryptoName}
          {!!cryptoTicker && cryptoTicker !== '' && (<Ticker>{cryptoTicker}</Ticker>)}
        </Title>
      )}
      {!!description && description !== '' && <Description>{description}</Description>}
      {!!buttonText && buttonText !== '' && <CTA withArrowIcon>{buttonText}</CTA>}
      {!buttonText && <CircleButton><ArrowIcon /></CircleButton>}
    </CardBox>
  )
}

export default CryptoCard