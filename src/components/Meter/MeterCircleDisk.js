import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MeterCircleDisk extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    size: PropTypes.number,
    lineWidth: PropTypes.number,
    lineBackground: PropTypes.string,
    lineForeground: PropTypes.string,
    rounded: PropTypes.bool,
    textStyle: PropTypes.object,
  }
  static defaultProps = {
    size: 200,
    lineWidth: 16,
    lineBackground: '#820333',
    lineForeground: '#C9283E',
    rounded: false,
    textStyle: {},
  }

  render() {
    const { size, lineWidth, value, lineBackground, lineForeground, rounded, textStyle } = this.props

    const baseTextStyle = {
      fontSize: (size - lineWidth * 2) / 2.5,
      fontWeight: 'bold',
      fill: '#C9283E',
    }

    // The stroke is based on the center of the lineWidth,
    // we'll remove the extra width to fit the size.
    const radius = (size - lineWidth) / 2
    const viewBox = `0 0 ${size} ${size}`

    // get the circle circumference
    // const dashArray = radius * Math.PI * 2
    const dashArray = radius * Math.PI
    // Length of the value prop for the progress
    const dashOffset = dashArray - dashArray * value / 100

    let lineEnd = rounded ? 'round' : 'butt'
    let textStyleOveride = { ...baseTextStyle, ...textStyle }

    return (
      <svg width={size} height={size} viewBox={viewBox} style={{ fill: 'none' }}>
        {/* background circle */}
        <circle
          style={{ stroke: lineBackground }}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${lineWidth}px`}
        />

        {/* foreground circle */}
        <circle
          className="circle-progress"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${lineWidth}px`}
          // Start progress marker at 12 O'Clock
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{
            stroke: lineForeground,
            strokeLinecap: lineEnd,
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            transition: 'stroke-dashoffset 200ms linear',
          }}
        />

        <text style={textStyleOveride} className="circle-text" x="50%" y="50%" dy=".3em" textAnchor="middle">
          {`${value}%`}
        </text>
      </svg>
    )
  }
}
