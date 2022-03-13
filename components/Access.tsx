import React from "react";
import styled from "styled-components";
import Button from "./Button";

const AccessBox = styled.div`
  display: flex;
  align-items: center;

  &.primary {
    background-color: #3671E9;
  }
`

const Divider = styled.span`
  height: 1.5rem;
  width: 2px;
  margin: 0 1.5rem;
  background-color: #F2F2F2;
  opacity: 0.3;
`

function Access() {
  return (
    <AccessBox>
      <Button variant="link">Login</Button>
      <Divider />
      <Button variant="primary">Register</Button>
    </AccessBox>
  );
}

export default Access;
