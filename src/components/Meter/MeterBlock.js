import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MeterBlock extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    size: PropTypes.number,
    lineBackground: PropTypes.string,
    lineForeground: PropTypes.string,
    textStyle: PropTypes.object,
    horizontal: PropTypes.bool,
  }
  static defaultProps = {
    size: 200,
    lineBackground: '#820333',
    lineForeground: '#C9283E',
    textStyle: {},
    horizontal: true,
  }

  render() {
    const { size, value, lineBackground, lineForeground, textStyle, horizontal } = this.props

    const baseTextStyle = {
      fontSize: size / 2.5,
      fontWeight: 'bold',
      fill: '#2E112D',
    }

    const middle = size / 2
    const viewBox = `0 0 ${size} ${size}`
    const fillSize = value * size / 100

    let textStyleOveride = { ...baseTextStyle, ...textStyle }

    let progressBar = (
      <line x1={0} y1={middle} x2={fillSize} y2={middle} style={{ stroke: lineForeground }} strokeWidth={size} />
    )
    if (!horizontal)
      progressBar = (
        <line
          x1={middle}
          y1={size}
          x2={middle}
          y2={size - fillSize}
          style={{ stroke: lineForeground }}
          strokeWidth={size}
        />
      )

    return (
      <svg width={size} height={size} viewBox={viewBox} style={{ fill: 'none' }}>
        {/* background */}
        <line x1={0} y1={middle} x2={size} y2={middle} style={{ stroke: lineBackground }} strokeWidth={size} />
        {/* foreground */}
        {progressBar}
        <text style={textStyleOveride} className="circle-text" x="50%" y="50%" dy=".3em" textAnchor="middle">
          {`${value}%`}
        </text>
      </svg>
    )
  }
}
