import React from "react";
import styled from "styled-components";

const OfferBox = styled.div`
  display: inline-block;
`

const FlexLayout = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.25rem;
  border-radius: 2rem;
`;

const Discount = styled.span`
  display: inline-block;
  padding: 0.25rem 1rem;
  background-color: #ffffff;
  color: #0d0d2b;
  border-radius: 2rem;
`;

const Message = styled.span`
  display: inline-block;
  margin: 0 1rem;
`;

function Offer() {
  return (
    <OfferBox>
      <FlexLayout>
        <Discount>75% SAVE</Discount>
        <Message>For the Black Friday weekend</Message>
      </FlexLayout>
    </OfferBox>
  );
}

export default Offer;
