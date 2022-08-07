import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Icon = styled.div`
  > .icon {
    width: 2.5rem;
    height: 2.5rem;
  }
`

const Ticker = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
`

const Name = styled.div`
  font-size: 1rem;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0.01em;
  color: #F2F2F2;
`

export interface CryptoNameProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  cryptoName: string,
  ticker: string,
  icon: React.ReactElement,
}

function CryptoName({ cryptoName, ticker, icon, ...rest }: CryptoNameProps) {
  return (
    <Row {...rest}>
      <Icon>
        <icon.type {...icon.props} viewBox="0 0 80 80" className="icon" />
      </Icon>
      <Column>
        <Ticker>
          {ticker}
        </Ticker>
        <Name>
          {cryptoName}
        </Name>
      </Column>
    </Row>
  )
}

export default CryptoName