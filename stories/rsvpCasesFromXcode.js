   
   organizerAvatar.setImageWithUser(rsvp.game.creator)

    switch rsvp.state {

    case _ where rsvp.game.state == .Cancelled:
      swap(actionController: nil, rsvpInfosController: nil)

    case _ where !rsvp.game.organizerMode:
      swap(actionController: planAction, rsvpInfosController: nil)

    case .Pending where rsvp.user == rsvp.game.creator:
      swap(actionController: questionDescriptionAction, rsvpInfosController: nil)

    case .Pending where fromInvite || rsvp.invite?.type == .Message:
      swap(actionController: invitedAction, rsvpInfosController: pendingInvite)

    case .Pending:
      swap(actionController: actionRsvpAction, rsvpInfosController: nil)

    case .Claiming where rsvp.game.spots.open > 0 && rsvp.watching == false:
      swap(actionController: openQuestionAction, rsvpInfosController: claimingRsvpOpen)

    case .Claiming where rsvp.game.spots.open == 0 && rsvp.watching == false:
      swap(actionController: closedQuestionAction, rsvpInfosController: claimingRsvpClosed)

    default:
      swap(actionController: collapsibleActiveAction, rsvpInfosController: nil)
    }
  }
}
