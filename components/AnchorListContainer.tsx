import React from 'react'
import styled, { css } from 'styled-components'
import cx from 'classnames'

const List = styled.ul<AnchorListContainerProps>`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  
  ${props => props.isInline && css`
    flex-direction: row;
  `}

  ${props => !props.isInline && css`
    flex-direction: column;
  `}
`

export interface AnchorListContainerProps extends React.HTMLAttributes<HTMLUListElement> {
  isInline?: boolean
}

function AnchorListContainer({ children, className, ...rest }: AnchorListContainerProps) {
  return (
    <List className={cx("anchor-list", className)} {...rest}>
      {children}
    </List>
  )
}

export default AnchorListContainer