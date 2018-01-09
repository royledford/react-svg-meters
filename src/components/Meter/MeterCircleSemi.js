import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MeterCircleSemi extends Component {
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
      fontSize: (size - lineWidth * 2) / 2.8,
      fontWeight: 'bold',
      fill: '#C9283E',
    }

    // The stroke is based on the center of the lineWidth,
    // we'll remove the extra width to fit the size.
    const radius = (size - lineWidth) / 2
    const viewBox = `0 0 ${size} ${size / 2}`
    const internalWidth = size - lineWidth

    // start point of progress arc.
    const startX = lineWidth / 2
    const startY = size / 2

    // get the semi-circle circumference
    const dashArray = radius * Math.PI * 2 / 2
    // Length of the value prop for the progress bar
    const dashOffset = dashArray - dashArray * value / 100

    let lineEnd = rounded ? 'round' : 'butt'
    let textStyleOveride = { ...baseTextStyle, ...textStyle }

    return (
      <svg width={size} height={size / 2} viewBox={viewBox} style={{ fill: 'none' }}>
        {/* background */}
        <path
          d={`M${startX},${startY}a${radius},${radius} 0 0,1 ${internalWidth},0`}
          stroke={lineBackground}
          strokeMiterlimit="10"
          strokeWidth={`${lineWidth}px`}
        />

        {/* foreground */}
        <path
          d={`M${startX},${startY}a${radius},${radius} 0 0,1 ${internalWidth},0`}
          stroke={lineForeground}
          strokeMiterlimit="10"
          strokeWidth={`${lineWidth}px`}
          style={{
            stroke: lineForeground,
            strokeLinecap: lineEnd,
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            transition: 'stroke-dashoffset 200ms linear',
          }}
        />

        <text
          style={textStyleOveride}
          className="circle-text"
          x="50%"
          y="100%"
          dy="-.08em"
          textAnchor="middle"
          alignmentBaseline="baseline">
          {`${value}%`}
        </text>
      </svg>
    )
  }
}
