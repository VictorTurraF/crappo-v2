import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import Logo from '../Logo'
import SocialLinksList from './SocialLinksList'
import Typography from '../Typography'
import QuickLinksList from './QuickLinksList'
import ResourcesLinksList from './ResourcesLinksList'
import Payments from './Payments'

const FooterContainer = styled(Container)`
  min-width: 1200px;
`

const FooterTag = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 2.5rem; 
  align-items: stretch;
`

const LinksSection = styled(FooterContainer)`
  display: flex;
  gap: 2.25rem;
  padding-top: 5rem;
`

const FooterSection = styled(FooterContainer)`
  display: flex;
  padding-top: 5rem;
  padding-bottom: 5rem;
`

const LogoColumn = styled.div`
  margin-right: auto;
`

const PaymentsColumn = styled.div`
  margin-left: auto;
`

const Copyright = styled(Typography.Paragraph)`
  color: #fff;
`

function Footer() {
  return (
    <FooterTag>
      <LinksSection>
        <LogoColumn>
          <Logo />
        </LogoColumn>
        <QuickLinksList />
        <ResourcesLinksList />
        <PaymentsColumn>
          <Payments />
        </PaymentsColumn>
      </LinksSection>
      <FooterSection>
        <Copyright>©{new Date().getFullYear()} CRAPPO. All rights reserved</Copyright>
        <SocialLinksList />
      </FooterSection>
    </FooterTag>
  )
}

export default Footer