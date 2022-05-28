import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import IllustrationImage from '../assets/illustrations/Illustration.svg'

const FloatingBox = styled.div`
  position: absolute;  
  right: 0;
  top: -2rem;
`

function Illustration() {
  return (
    <FloatingBox>
      <IllustrationImage />
    </FloatingBox>
  )
}

export default Illustration