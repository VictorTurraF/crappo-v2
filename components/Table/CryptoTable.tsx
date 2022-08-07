import React from 'react'
import styled, { css } from 'styled-components'
import CryptoName from './CryptoName'

import BtcIcon from '../../assets/icons/btc-icon.svg'
import EthIcon from '../../assets/icons/eth-icon.svg'
import LtcIcon from '../../assets/icons/ltc-icon.svg'
import TableCell from './TableCell'
import CryptoNameCell from './CryptoNameCell'
import CryptoChange from './CryptoChange'

interface TableRowProps {
  isHeadingRow?: boolean,
  isHighlited?: boolean,
}

const Table = styled.div`
  min-width: 610px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem 0;
  background: #35068C;
  backdrop-filter: blur(4px);
  border-radius: 16px;
`

const TableRow = styled.div<TableRowProps>`
  display: flex;
  align-items: center;
  padding: 0 2.25rem;
  gap: 2rem;

  ${props => props.isHeadingRow && css`
    font-weight: 600;
    font-size: .875rem;
    color: #FFFFFF;
    margin-bottom: -.5rem;
  `}

  ${props => props.isHighlited && css`
    background: #4610AD;
    position: relative;
    left: -4.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 1rem;
  `}
`



function CryptoTable() {
  return (
    <Table>
      <TableRow isHeadingRow>
        <CryptoNameCell isHidden>Name</CryptoNameCell>
        <TableCell>Price</TableCell>
        <TableCell>Change</TableCell>
        <TableCell>Volume</TableCell>
      </TableRow>
      <TableRow>
        <CryptoNameCell>
          <CryptoName
            cryptoName="Bitcoin"
            ticker="BTC"
            icon={
              <BtcIcon />
            }
          />
        </CryptoNameCell>
        <TableCell>$6750</TableCell>
        <TableCell>
          <CryptoChange percentage={7.3} />
        </TableCell>
        <TableCell>$3420214</TableCell>
      </TableRow>
      <TableRow isHighlited>
        <CryptoNameCell>
          <CryptoName
            cryptoName="Ethereum"
            ticker="ETH"
            icon={
              <EthIcon />
            }
          />
        </CryptoNameCell>
        <TableCell>$156.83</TableCell>
        <TableCell>
          <CryptoChange percentage={-0.9} />
        </TableCell>
        <TableCell>$1812385</TableCell>
      </TableRow>
      <TableRow>
        <CryptoNameCell>
          <CryptoName
            cryptoName="Litecoin"
            ticker="LTC"
            icon={
              <LtcIcon />
            }
          />
        </CryptoNameCell>
        <TableCell>$8535</TableCell>
        <TableCell>
          <CryptoChange percentage={8.2} />
        </TableCell>
        <TableCell>$5820399</TableCell>
      </TableRow>
    </Table>
  )
}

export default CryptoTable