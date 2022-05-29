import React, { HTMLProps } from 'react'
import styled, { css } from 'styled-components'

const StyledHeading = styled(HeadingAdapter)`
  ${({ theme }) => theme === 'dark' && css`
    color: #0D0D2B;
  `}

  ${({ theme }) => theme === 'light' && css`
    color: #FFFFFF;
  `}

  ${({ level }) => level === 'h1' && css`
    font-size: 4rem;
  `}

  ${({ level }) => level === 'h2' && css`
    font-size: 2.5rem;
  `}

  ${({ level }) => level === 'h3' && css`
    font-size: 2rem;
  `}

  font-weight: 700;
  line-height: 150%;
  font-style: normal;
  margin: 0;
`

const StyledParagraph = styled.p`
  ${({ theme }) => theme === 'dark' && css`
    color: #0D0D2B;
  `}

  ${({ theme }) => theme === 'light' && css`
    color: #E0E0E0;
  `}

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.01em;
  color: #E0E0E0;
  margin: 0;
`

export interface HeadingProps extends HTMLProps<HTMLHeadingElement> {
  level?: 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1',
  theme?: 'light' | 'dark'
}

function Heading({ className, children, level = 'h6', theme = 'dark' }: HeadingProps) {

  return (
    <StyledHeading
      className={className}
      level={level}
      theme={theme}
    >
      {children}
    </StyledHeading>
  )
}

function HeadingAdapter({ level, ...rest }: HeadingProps) {
  const Component = level || 'h6'

  return (
    <Component {...rest}/>
  )
}


export interface ParagraphProps extends HTMLProps<HTMLParagraphElement> {
  theme: 'light' | 'dark'
}

function Paragraph({ className, children }: ParagraphProps) {
  return (
    <StyledParagraph className={className}>{children}</StyledParagraph>
  )
}

export default {
  Heading,
  Paragraph,
}