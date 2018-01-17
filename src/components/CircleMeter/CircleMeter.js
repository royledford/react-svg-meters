import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Circular meter
 */
export default class CircleMeter extends Component {
  static propTypes = {
    /** A number representing the percentage to fill on the meter. Must be between 0 and 100. */
    value: PropTypes.number.isRequired,
    /** Size of the meter in pixels. */
    size: PropTypes.number,
    /** The width of the line in the meter graphic. */
    thickness: PropTypes.number,
    /** Background color for the meter graphic. */
    backgroundColor: PropTypes.string,
    /** Foreground color for the meter graphic. */
    foregroundColor: PropTypes.string,
    /** Color of the text object in the meter graphic. */
    textColor: PropTypes.string,
    /** Start position of the progress portion of the meter graphic in degrees. Must be between 0 and 360. */
    progressStart: PropTypes.number,
    /** The arc length in degrees for the meter graphic. For example, a value of 90 would produce a meter that fills 25% of a circle. */
    meterLength: PropTypes.number,
    /** If true, will round the ends of the meter graphic. */
    rounded: PropTypes.bool,
    /** Override the inline styles of the text object. Must be a valid style object. */
    textStyle: PropTypes.object,
    /** Name of a css class that can be applied to the root SVG element of the meter. */
    className: PropTypes.string,
    /** A style object that can be applied to the root SVG element of the meter. */
    style: PropTypes.object,
  }
  static defaultProps = {
    size: 200,
    thickness: 16,
    backgroundColor: '#7FB2F0',
    foregroundColor: '#35478C',
    textColor: null,
    progressStart: 0, // in degrees
    meterLength: 360, // in degrees
    rounded: false,
    textStyle: {},
    className: '',
    style: {},
  }

  render() {
    const {
      size,
      thickness,
      value,
      backgroundColor,
      foregroundColor,
      rounded,
      textStyle,
      progressStart,
      meterLength,
      className,
      style,
    } = this.props

    const baseTextStyle = {
      fontSize: (size - thickness * 2) / 2.5,
      fontWeight: 'bold',
      fontFamily: 'sans-serif',
      fill: this.props.textColor || this.props.foregroundColor,
    }

    // The stroke width originates at the center of the element.
    // Reduce the radius to account for extra width the stroke creates.
    const radius = (size - thickness) / 2
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
      <svg width={size} height={size} viewBox={viewBox} className={className} style={style}>
        {/* background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${thickness}px`}
          transform={`rotate(${_progressStart} ${size / 2} ${size / 2})`}
          style={{
            fill: 'none',
            stroke: backgroundColor,
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
          strokeWidth={`${thickness}px`}
          transform={`rotate(${_progressStart} ${size / 2} ${size / 2})`}
          style={{
            fill: 'none',
            stroke: foregroundColor,
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
