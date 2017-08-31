/* @flow */
/* eslint-disable max-len */

import React from 'react'
import IconBase from './IconBase'

type Props = typeof IconBase.prototype.props

/**
 * Person icon
 */

export default (props: Props) =>
  <IconBase viewBox='0 0 30 30' {...props}>
    <path d='M14.7 24.5c-8.3 0-8.9-1.6-8.9-1.6s.3-3.7 2.2-4.8c1.6-.7 4.3-1 4.8-1.6.4-.4.4-1.1.5-1.4 0-.2-.4-.6-.6-.8-.4-.6-.7-1.2-.9-1.8 0-.1-.1-.2-.1-.3-.6-1.8-.8-3.9.1-5.7.5-1.1 1.9-2 3.1-2h.5c1.2 0 2.6.9 3.1 2 .8 1.8.7 3.8.1 5.7 0 .1-.1.2-.1.3-.2.6-.6 1.2-.9 1.8-.1.2-.6.6-.6.8 0 .3.1 1 .5 1.4.5.5 3.1.9 4.8 1.6 2.2.9 2.3 4.9 2.3 4.9s-1.1 1.5-9.4 1.5h-.5z' />
  </IconBase>
