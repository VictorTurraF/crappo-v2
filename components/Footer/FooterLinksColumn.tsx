import React from 'react'
import styled from 'styled-components'
import AnchorList from '../AnchorList'
import { FooterHeading } from './FooterHeading'

export interface FooterLinksColumnProps {
  title: string
  links: React.AnchorHTMLAttributes<HTMLAnchorElement>[]
}

const Box = styled.div`
  width: 200px;
`

const List = styled(AnchorList.Container)`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ListItem = styled(AnchorList.Item)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`

function FooterLinksColumn({
  title = '',
  links = [],
}: FooterLinksColumnProps) {
  return (
    <Box>
      <FooterHeading theme='light' level='h3'>{title}</FooterHeading>
      <List>
        {links.map((link) => (
          <ListItem key={link.href} {...link} />
        ))}
      </List>
    </Box>
  )
}

export default FooterLinksColumn