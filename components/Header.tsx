import React from "react";
import styled from "styled-components";
import Access from "./Access";

import Container from "./Container";
import InlineMenu from "./InlineMenu";
import InlineMenuItem from "./InlineMenuItem";
import Logo from "./Logo";

const HeaderRow = styled.header`
  padding: 3.75rem 0;
`;

const ContainerRow = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const StyledInlineMenu = styled(InlineMenu)`
  margin-right: 3.5rem;
`

function Header() {
  return (
    <HeaderRow>
      <ContainerRow>
        <Logo />
        <StyledInlineMenu>
          <InlineMenuItem href="/products">Products</InlineMenuItem>
          <InlineMenuItem href="/features">Features</InlineMenuItem>
          <InlineMenuItem href="/about">About</InlineMenuItem>
          <InlineMenuItem href="/contact">Contact</InlineMenuItem>
        </StyledInlineMenu>
        <Access />
      </ContainerRow>
    </HeaderRow>
  );
}

export default Header;
