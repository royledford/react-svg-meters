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
    showBorder: PropTypes.bool,
  }
  static defaultProps = {
    size: 200,
    lineWidth: 16,
    lineBackground: '#820333',
    lineForeground: '#C9283E',
    rounded: false,
    textStyle: {},
    showBorder: true,
  }

  render() {
    const { size, value, lineBackground, lineForeground, rounded, textStyle } = this.props

    // handle case with no border
    const lineWidth = this.props.showBorder ? this.props.lineWidth : 0

    const baseTextStyle = {
      fontSize: (size - lineWidth * 2) / 2.8,
      fontWeight: 'bold',
      fill: '#C9283E',
    }

    // The stroke is based on the center of the lineWidth,
    // we'll remove the extra width to fit the size.
    const radius = (size - lineWidth) / 2
    const viewBox = `0 0 ${size} ${size}`

    // handle cases where the outer stroke width is to large and the inner
    // circle radius is a negative number.
    let innerRadius = radius - lineWidth
    innerRadius = innerRadius < 0 ? 0 : innerRadius

    // Height of fill percentage
    const fillSize = value * (innerRadius * 2) / 100

    // bottom of the fill disk
    // const diskTop = innerRadius * 2 - fillSize
    const diskTop = size - fillSize - lineWidth * 1.5

    // generate a unique id for the svg mask
    const uniqueId =
      'mask_' +
      new Date().valueOf() +
      Math.random()
        .toFixed(16)
        .substring(2)

    // get the circle circumference
    // const dashArray = radius * Math.PI * 2
    const dashArray = radius * Math.PI
    // Length of the value prop for the progress
    const dashOffset = dashArray - dashArray * value / 100

    let lineEnd = rounded ? 'round' : 'butt'
    let textStyleOveride = { ...baseTextStyle, ...textStyle }

    return (
      <svg width={size} height={size} viewBox={viewBox} style={{ fill: 'none' }}>
        <defs>
          <mask id={uniqueId} x="0" y="0" width={size} height={size}>
            <rect
              x="0"
              y={diskTop}
              width={size}
              height={fillSize}
              style={{ stroke: 'none', fill: '#fff', transition: 'all 200ms linear' }}
            />
          </mask>
        </defs>

        {/* border circle */}
        <circle
          style={{ stroke: lineBackground }}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${lineWidth}px`}
        />

        {/* foreground */}
        <circle
          style={{ fill: lineBackground }}
          cx={size / 2}
          cy={size / 2}
          r={innerRadius}
          strokeWidth={0}
          mask={`url(#${uniqueId})`}
        />

        <text style={textStyleOveride} className="circle-text" x="50%" y="50%" dy=".3em" textAnchor="middle">
          {`${value}%`}
        </text>
      </svg>
    )
  }
}
