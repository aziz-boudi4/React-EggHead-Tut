// @flow

import React, {Component} from 'react'
import {Flex, Block} from 'jsxstyle'
import models from '../../models'
import Text from '../text'
import Cross from '../icons/cross'
import WaitList from '../icons/waitlist'
import Checkmark from '../icons/checkmark'
import Button from '../button'
import Avatar, {AVATAR_SIZES} from '../avatar'
import LayoutConstants from '../../constants/layout'

type PendingInviteProps = {
  rsvp: Rsvp
}

// rsvp.user is rsvp.game.creator => Blue "Join this game"
//

function PendingInviteStatus(props: PendingInviteProps) {


  const title = props.rsvp.invite && props.rsvp.game.creator != props.rsvp.invite.inviter
    ? `${models.user(props.rsvp.invite.inviter).getShortName()} invited you`
    : 'ARE YOU IN?'

  const subtitle = props.rsvp.game.spots.open > 0
    ? `${props.rsvp.game.spots.open} spots left`
    : `${props.rsvp.game.stats.waiting} people waiting`

  const yesButton = (
    <Button type='icon'>
      {
        props.rsvp.game.spots.open > 0
          ? <Checkmark size='extraLarge' color={LayoutConstants.primaryGreen} backgroundColor='none'/>
          : <WaitList size='extraLarge' color='white' backgroundColor='none'/>
      }
    </Button>
  )
  const noButton = (
    <Button type='icon'>
      <Cross size='extraLarge' color='red' backgroundColor='none' />
    </Button>
  )

  return (
    <Flex
      position='relative'
      textAlign='center'
      color='white'
      backgroundColor={LayoutConstants.primaryBlue}
      justifyContent='center'
      alignItems='center'>

      <Flex
        flex={1}
        justifyContent='flex-start'
        padding={LayoutConstants.gridUnit * 2}>
        {noButton}
      </Flex>

      <Flex
        flexDirection='column'
        alignItems='center'
        overflow='hidden'>
        {
          props.rsvp.invite && props.rsvp.game.creator != props.rsvp.invite.inviter
            ?
              <Block
                position='absolute'
                top={-AVATAR_SIZES.small / 2}>
                <Avatar user={props.rsvp.invite.inviter} size='small' />
              </Block>
            : null
        }
        <Text textStyle='small'>{title}</Text>
        <Text
          color={LayoutConstants.primaryGreen}
          textStyle='small' bold>{subtitle}</Text>
      </Flex>

      <Flex flex={1} justifyContent='flex-end' padding={LayoutConstants.gridUnit * 2}>
        {yesButton}
      </Flex>
    </Flex>
  )
}

// reuse code from https://github.com/jogabo/node-server/blob/master/lib/components/RsvpConfirmed.js
const ConfirmedInviteStatus = () => {
  return <div />
}

export default PendingInviteStatus
