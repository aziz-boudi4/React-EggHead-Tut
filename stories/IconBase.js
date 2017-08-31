/* @flow */

import React, { Component } from 'react'

/**
 * IconBase component
 */

class IconBase extends Component {
  props: {
    children?: any,
    style?: Object,
    className?: string,
    size: number
  };

  render () {
    const styles = {
      verticalAlign: 'middle'
    }

    const props = {
      fill: 'currentColor',
      width: this.props.size,
      height: this.props.size
    }

    return (
      <svg {...props} {...this.props}
        preserveAspectRatio='xMidYMid meet'
        style={{...styles, ...this.props.style}} >
        {this.props.children}
      </svg>
    )
  }
}

/*!
 * export
 */

export default IconBase
