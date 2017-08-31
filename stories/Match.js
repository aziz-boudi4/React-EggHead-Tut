/* @flow */
/* eslint-disable max-len */

import React from 'react'
import IconBase from './IconBase'

type Props = typeof IconBase.prototype.props

/**
 * Person icon
 */

export default (props: Props) =>
  <IconBase viewBox='0 0 32 32' {...props}>
	  <g fill="none" fillRule="evenodd" transform="translate(2 2)">
	    <circle cx="14" cy="14" r="14" stroke="#343458" strokeWidth="2"/>
	    <text fill="#000" fontFamily="HelveticaNeue-Medium, Helvetica Neue" fontSize="12.822" fontWeight="400">
	      <tspan x="7.345" y="17.314" fill="#343458">vs</tspan>
	    </text>
	  </g>
  </IconBase>
