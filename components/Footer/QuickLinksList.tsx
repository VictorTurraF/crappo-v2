import React from 'react'
import FooterLinksColumn from './FooterLinksColumn'

const menuLinks = [
  { title: 'Home',      href: '/',          children: 'Home' },
  { title: 'Products',  href: '/products',  children: 'Products' },
  { title: 'About',     href: '/about',     children: 'About' },
  { title: 'Features',  href: '/features',  children: 'Features' },
  { title: 'Contact',   href: '/contact',   children: 'Contact' },
]

function QuickLinksList() {
  return (
    <FooterLinksColumn title="Quick Link" links={menuLinks} />
  )
}

export default QuickLinksList