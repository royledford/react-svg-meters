import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HalfCircleMeter extends Component {
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
      className,
      style,
    } = this.props

    const baseTextStyle = {
      fontSize: (size - thickness * 2) / 2.8,
      fontWeight: 'bold',
      fontFamily: 'sans-serif',
      fill: this.props.foregroundColor,
    }

    // The stroke width originates at the center of the element.
    // Reduce the radius to account for extra width the stroke creates.
    const radius = (size - thickness) / 2
    const viewBox = `0 0 ${size} ${size / 2}`
    const internalWidth = size - thickness

    // start point of progress arc.
    const startX = thickness / 2
    const startY = size / 2

    const circumference = radius * Math.PI * 2 / 2
    const meterLength = circumference * value / 100
    const progressLength = circumference - meterLength

    let lineEnd = rounded ? 'round' : 'butt'
    let textStyleOveride = { ...baseTextStyle, ...textStyle }

    return (
      <svg width={size} height={size / 2} viewBox={viewBox} className={className} style={style}>
        {/* background */}
        <path
          d={`M${startX},${startY}a${radius},${radius} 0 0,1 ${internalWidth},0`}
          stroke={backgroundColor}
          strokeMiterlimit="10"
          strokeWidth={`${thickness}px`}
          style={{ fill: 'none' }}
        />

        {/* foreground */}
        <path
          d={`M${startX},${startY}a${radius},${radius} 0 0,1 ${internalWidth},0`}
          stroke={foregroundColor}
          strokeMiterlimit="10"
          strokeWidth={`${thickness}px`}
          style={{
            fill: 'none',
            stroke: foregroundColor,
            strokeLinecap: lineEnd,
            strokeDasharray: circumference,
            strokeDashoffset: progressLength,
            transition: 'stroke-dashoffset 200ms linear',
          }}
        />

        {/* Text */}
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
