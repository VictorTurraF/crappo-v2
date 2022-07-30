import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'
import InfoMetaComponent from './InfoMeta'
import InfoValue from './InfoValue'
import Image from 'next/image'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`
const Avatar = styled.div`
  margin-right: 1rem;
`

const Box = styled.div``

const RoundedAvatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50rem;
  overflow: hidden;
`

const InfoMeta = styled(InfoMetaComponent)`
  text-transform: uppercase;
  font-weight: 500;
  font-size: .625rem;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: #6EDCB5;
  margin-top: .25rem;
`

export interface UserInfoCellProps extends React.HTMLAttributes<HTMLDivElement> {
  userName: string,
  isVerified?: boolean
}

function UserInfoCell({ className = "", userName, isVerified = true, ...rest }: UserInfoCellProps) {
  return (
    <Row className={cx("info-value", className)} {...rest}>
      <Avatar>
        <RoundedAvatar>
          <Image
            width={100}
            height={100}
            objectFit="cover"
            objectPosition="center"
            src="/images/chart-avatar.png"
          />
        </RoundedAvatar>
      </Avatar>
      <Box>
        <InfoValue>{userName}</InfoValue>
        <InfoMeta>{isVerified ? "Verified" : "Unverified"}</InfoMeta>
      </Box>
    </Row>
  )
}

export default UserInfoCell