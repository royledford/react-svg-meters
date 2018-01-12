import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MeterCircle extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    size: PropTypes.number,
    lineWidth: PropTypes.number,
    lineBackground: PropTypes.string,
    lineForeground: PropTypes.string,
    progressStart: PropTypes.number,
    meterLength: PropTypes.number,
    rounded: PropTypes.bool,
    textStyle: PropTypes.object,
  }
  static defaultProps = {
    size: 200,
    lineWidth: 16,
    lineBackground: '#7FB2F0',
    lineForeground: '#35478C',
    progressStart: 0, // in degrees
    meterLength: 360, // in degrees
    rounded: false,
    textStyle: {},
  }

  render() {
    const {
      size,
      lineWidth,
      value,
      lineBackground,
      lineForeground,
      rounded,
      textStyle,
      progressStart,
      meterLength,
    } = this.props

    const baseTextStyle = {
      fontSize: (size - lineWidth * 2) / 2.5,
      fontWeight: 'bold',
      fill: this.props.lineForeground,
    }

    // The stroke is based on the center of the lineWidth,
    // we'll remove the extra width to fit the size.
    const radius = (size - lineWidth) / 2
    const viewBox = `0 0 ${size} ${size}`

    const circumference = radius * Math.PI * 2
    const meterPercentage = meterLength / 360
    const _meterLength = meterPercentage * circumference

    const progressPercentage = value * meterPercentage / 100
    const progressLength = circumference * progressPercentage

    // Make sure a valid value is passed (use 0 if not)
    let _progressStart = progressStart - 90
    if (progressStart < 0 || progressStart > 360) {
      _progressStart = -90
    }

    let lineEnd = rounded ? 'round' : 'butt'
    let textStyleOveride = { ...baseTextStyle, ...textStyle }

    return (
      <svg width={size} height={size} viewBox={viewBox} style={{ fill: 'none' }}>
        {/* background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${lineWidth}px`}
          transform={`rotate(${_progressStart} ${size / 2} ${size / 2})`}
          style={{
            stroke: lineBackground,
            strokeLinecap: lineEnd,
            strokeDasharray: circumference,
            strokeDashoffset: circumference - _meterLength,
            transition: 'stroke-dashoffset 200ms linear',
          }}
        />

        {/* foreground circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${lineWidth}px`}
          transform={`rotate(${_progressStart} ${size / 2} ${size / 2})`}
          style={{
            stroke: lineForeground,
            strokeLinecap: lineEnd,
            strokeDasharray: circumference,
            strokeDashoffset: circumference - progressLength,
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
