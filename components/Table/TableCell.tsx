import styled, { css } from "styled-components"

export interface TableCellProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  isHidden?: boolean,
  flexBasis?: string,
}

const TableCell = styled.div<TableCellProps>`
  visibility: ${props => props.isHidden ? 'hidden' : 'visible'};
  flex: 1 0 0%;

  ${props => !!props.flexBasis && css`
    flex-basis: ${props.flexBasis};
  `}
`

export default TableCell