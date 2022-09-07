import React from 'react'
import FooterLinksColumn from './FooterLinksColumn'

const menuLinks = [
  { title: "Download Whitepaper", href: "/whitepaper",          children: "Download Whitepaper" },
  { title: "Smart Token",         href: "/smart-token",         children: "Smart Token" },
  { title: "Blockchain Explorer", href: "/blockchain-explorer", children: "Blockchain Explorer" },
  { title: "Crypto API",          href: "/crypto-api",          children: "Crypto API" },
  { title: "Interest",            href: "/interest",            children: "Interest" },
]

function ResourcesLinksList() {
  return (
    <FooterLinksColumn title="Resources" links={menuLinks} />
  )
}

export default ResourcesLinksList