import React from "react";
import styled from "styled-components";
import cs from "classnames";

const ItemBox = styled.li`
`;

const ItemLink: any = styled.a`
  padding: 0 1rem;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 400;
  font-size: 1rem;

  &:hover {
    color: rgba(255, 255, 255, 0.75);
    text-decoration: underline;
  }
`;

interface InlineMenuItemProps extends React.HTMLProps<HTMLAnchorElement> {
  itemClassName?: string;
}

function InlineMenuItem({ children, itemClassName = "", ...props }: InlineMenuItemProps) {
  return (
    <ItemBox className={cs("menu-item", itemClassName)}>
      <ItemLink {...props}>{children}</ItemLink>
    </ItemBox>
  );
}

export default InlineMenuItem;
