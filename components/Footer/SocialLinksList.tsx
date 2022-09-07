import React from 'react'
import AnchorList from '../AnchorList'
import styled from 'styled-components'

import FbIcon from '../../assets/icons/facebook-icon.svg'
import IgIcon from '../../assets/icons/instagram-icon.svg'
import YtIcon from '../../assets/icons/youtube-icon.svg'
import TwIcon from '../../assets/icons/twitter-icon.svg'
import InIcon from '../../assets/icons/linkedin-icon.svg'

const List = styled(AnchorList.Container)`
  gap: 2rem;
  margin-left: auto !important;
`

function SocialLinksList() {
  return (
    <List isInline>
      <AnchorList.Item href="#"><FbIcon /></AnchorList.Item>
      <AnchorList.Item href="#"><IgIcon /></AnchorList.Item>
      <AnchorList.Item href="#"><YtIcon /></AnchorList.Item>
      <AnchorList.Item href="#"><TwIcon /></AnchorList.Item>
      <AnchorList.Item href="#"><InIcon /></AnchorList.Item>
    </List>
  )
}

export default SocialLinksList