import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Container from "./Container";
import Offer from "./Offer";

const HeroBox = styled.div`
  max-width: 588px;
`;

const HeadLine = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  line-height: 75.84px;
  margin-top: 1.5rem;
`;

const Supporting = styled.p`
  max-width: 435px;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.125rem;
  letter-spacing: 0.01em;
  margin-top: 1.5rem;
`;

const CTA = styled.div`
  margin-top: 2rem;
`;

const CTAButton = styled(Button)`
  font-weight: 500;
  font-size: 1.125rem;
  padding: 1rem 1rem 1rem 1.75rem;
`

const HeroContainer = styled(Container)`
  position: relative;
  top: 48%;
  transform: translateY(-50%);
`

function Hero() {
  return (
    <HeroContainer>
      <HeroBox>
        <Offer />
        <HeadLine>Fastest &amp; secure platform to invest in crypto</HeadLine>
        <Supporting>
          Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in
          transactions.
        </Supporting>
        <CTA>
          <CTAButton variant="primary" withArrowIcon>
            Try for FREE
          </CTAButton>
        </CTA>
      </HeroBox>
    </HeroContainer>
  );
}

export default Hero;
