import React from "react";
import styled from "styled-components";
import cs from "classnames";

import ArrowRightIcon from "../assets/icons/button-right-arrow.svg";

const StyledButton: any = styled.button`
  padding: 0.875rem 2rem;
  border: 0;
  border-radius: 50rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;

  &.btn-primary {
    background-color: #3671e9;
    color: #fff;
  }

  &.btn-light {
    background-color: #fff;
    color: #0d0d2b;
  }

  &.btn-link {
    background-color: transparent;
    color: #fff;
    padding: 0;
  }

  &.btn-icon {
    padding-right: 1rem;
    display: flex;
    align-items: center;
  }
`;

const Text = styled.span`
  display: inline-block;
`;

const Icon = styled.span`
  margin-left: 1.5rem;
`;

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant?: "primary" | "light" | "link";
  withArrowIcon?: boolean;
}

function Button({
  children,
  variant = "primary",
  withArrowIcon = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      className={cs(
        "btn",
        {
          "btn-primary": variant === "primary",
          "btn-light": variant === "light",
          "btn-link": variant === "link",
          "btn-icon": withArrowIcon
        },
        className
      )}
      {...props}
    >
      {withArrowIcon ? (
        <>
          <Text>{children}</Text>
          <Icon>
            <ArrowRightIcon />
          </Icon>
        </>
      ) : (
        children
      )}
    </StyledButton>
  );
}

export default Button;
