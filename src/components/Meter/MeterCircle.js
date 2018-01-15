import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Circular meter
 */
export default class MeterCircle extends Component {
  static propTypes = {
    /** A number representing the percentage to fill on the meter. Must be between 0 and 100. */
    value: PropTypes.number.isRequired,
    /** Size of the meter. */
    size: PropTypes.number,
    /** Stroke width of the meter graphic. */
    lineWidth: PropTypes.number,
    /** Background color for the meter graphic. */
    lineBackground: PropTypes.string,
    /** Foreground color for the meter graphic. */
    lineForeground: PropTypes.string,
    /** Start position of the progress portion of the meter graphic. Must be between 0 and 360. */
    progressStart: PropTypes.number,
    /** The arc length in degrees for the meter graphic. For example, a value of 90 would produce a meter that fills 25% of a circle. */
    meterLength: PropTypes.number,
    /** Set to true to round the ends of the progress portion of the meter graphic. */
    rounded: PropTypes.bool,
    /** Override the inline styles of the text object. Must be a valid react style object. */
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
      fontFamily: 'sans-serif',
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
