import React from 'react'
import TableCell, { TableCellProps } from './TableCell'

function CryptoNameCell({ children, ...rest }: TableCellProps) {
  return (
    <TableCell flexBasis='17%' {...rest}>
      {children}
    </TableCell>
  )
}

export default CryptoNameCell
