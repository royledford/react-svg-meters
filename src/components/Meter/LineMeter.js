import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class LineMeter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    size: PropTypes.number,
    lineWidth: PropTypes.number,
    backgroundColor: PropTypes.string,
    foregroundColor: PropTypes.string,
    rounded: PropTypes.bool,
    textStyle: PropTypes.object,
    position: PropTypes.oneOf(['bottom', 'top']),
  }
  static defaultProps = {
    size: 200,
    lineWidth: 36,
    backgroundColor: '#7FB2F0',
    foregroundColor: '#35478C',
    rounded: false,
    textStyle: {},
    position: 'bottom',
  }

  render() {
    const { size, value, backgroundColor, foregroundColor, textStyle, lineWidth, rounded, position } = this.props

    const baseTextStyle = {
      fontSize: size / 2.5,
      fontWeight: 'bold',
      fill: this.props.foregroundColor,
    }

    let verticalCoordinate = size / 4 * 3
    let textBottom = size / 3
    if (position === 'top') {
      verticalCoordinate = size / 4
      textBottom = size / 4 * 3
    }
    const viewBox = `0 0 ${size} ${size}`
    const fillSize = value * size / 100

    let lineEnd = rounded ? 'round' : 'butt'
    let textStyleOveride = { ...baseTextStyle, ...textStyle }

    return (
      <svg width={size} height={size} viewBox={viewBox} style={{ fill: 'none' }}>
        {/* background */}
        <line
          x1={0}
          y1={verticalCoordinate}
          x2={size}
          y2={verticalCoordinate}
          style={{ stroke: backgroundColor }}
          strokeWidth={lineWidth}
        />
        {/* foreground */}
        <line
          x1={0}
          y1={verticalCoordinate}
          x2={fillSize}
          y2={verticalCoordinate}
          style={{
            stroke: foregroundColor,
            strokeLinecap: lineEnd,
          }}
          strokeWidth={lineWidth}
        />

        <text style={textStyleOveride} className="circle-text" x="50%" y={textBottom} textAnchor="middle">
          {`${value}%`}
        </text>
      </svg>
    )
  }
}
