import React from "react";
import styled from "styled-components";
import cs from "classnames";

const InlineMenuRow: any = styled.ul`
  display: flex;
  align-items: stretch;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
`;

interface InlineMenuProps extends React.HTMLProps<HTMLUListElement> {}

function InlineMenu({ children, className, ...props }: InlineMenuProps) {
  return (
    <InlineMenuRow className={cs("inline-menu", className)} {...props}>
      {children}
    </InlineMenuRow>
  );
}

export default InlineMenu;
