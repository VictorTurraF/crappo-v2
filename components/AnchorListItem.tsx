import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'

const ListItem = styled.li``
const Anchor = styled.a``

export interface AnchorListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

function AnchorListItem({ children, className, ...rest }: AnchorListItemProps) {
  return (
    <ListItem><Anchor className={cx("anchor-list-link", className)} {...rest}>{children}</Anchor></ListItem>
  )
}

export default AnchorListItem