import React from "react";
import styled from "styled-components";
import cs from "classnames";

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
`;

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant?: "primary" | "light" | "link";
}

function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  return (
    <StyledButton
      className={cs(
        "btn",
        {
          "btn-primary": variant === "primary",
          "btn-light": variant === "light",
          "btn-link": variant === "link",
        },
        className
      )}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
