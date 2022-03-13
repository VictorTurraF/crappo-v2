import React from "react";
import styled from "styled-components";

import LogoIcon from "../assets/icons/logo.svg";

const LogoBox = styled.div`
  display: flex;
  align-items: center;
`

const Logotype = styled.span`
  margin-right: 1rem;
`

const LogoText = styled.span`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.125rem;
`

function Logo() {
  return (
    <LogoBox>
      <Logotype>
        <LogoIcon />
      </Logotype>
      <LogoText>Crappo</LogoText>
    </LogoBox>
  );
}

export default Logo;
