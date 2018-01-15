import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class BlockMeter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    size: PropTypes.number,
    backgroundColor: PropTypes.string,
    foregroundColor: PropTypes.string,
    textColor: PropTypes.string,
    textStyle: PropTypes.object,
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
  }
  static defaultProps = {
    size: 200,
    backgroundColor: '#7FB2F0',
    foregroundColor: '#35478C',
    textColor: '#4E7AC7',
    textStyle: {},
    direction: 'horizontal',
  }

  render() {
    const { size, value, backgroundColor, foregroundColor, textStyle, direction } = this.props

    const baseTextStyle = {
      fontSize: size / 2.5,
      fontWeight: 'bold',
      fill: this.props.textColor,
    }

    const middle = size / 2
    const viewBox = `0 0 ${size} ${size}`
    const fillSize = value * size / 100

    let textStyleOveride = { ...baseTextStyle, ...textStyle }

    let progressBar = (
      <line x1={0} y1={middle} x2={fillSize} y2={middle} style={{ stroke: foregroundColor }} strokeWidth={size} />
    )
    if (direction === 'vertical')
      progressBar = (
        <line
          x1={middle}
          y1={size}
          x2={middle}
          y2={size - fillSize}
          style={{ stroke: foregroundColor }}
          strokeWidth={size}
        />
      )

    return (
      <svg width={size} height={size} viewBox={viewBox} style={{ fill: 'none' }}>
        {/* background */}
        <line x1={0} y1={middle} x2={size} y2={middle} style={{ stroke: backgroundColor }} strokeWidth={size} />
        {/* foreground */}
        {progressBar}
        <text style={textStyleOveride} className="circle-text" x="50%" y="50%" dy=".3em" textAnchor="middle">
          {`${value}%`}
        </text>
      </svg>
    )
  }
}
