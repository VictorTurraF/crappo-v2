import React from "react";
import styled from "styled-components";
import cs from "classnames";

const ContainerLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function Container({ className, children }: React.HTMLProps<any>) {
  return <ContainerLayout className={cs("container", className)}>{children}</ContainerLayout>;
}

export default Container;
