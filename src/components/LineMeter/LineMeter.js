import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Line style meter
 */
export default class LineMeter extends Component {
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
    /** If true, will round the ends of the meter graphic. */
    rounded: PropTypes.bool,
    /** Override the inline styles of the text object. Must be a valid style object. */
    textStyle: PropTypes.object,
    /** Defines the position of the meter graphic.  */
    position: PropTypes.oneOf(['bottom', 'top']),
    /** Name of a css class that can be applied to the root SVG element of the meter. */
    className: PropTypes.string,
    /** A style object that can be applied to the root SVG element of the meter. */
    style: PropTypes.object,
  }
  static defaultProps = {
    size: 200,
    thickness: 36,
    backgroundColor: '#7FB2F0',
    foregroundColor: '#35478C',
    rounded: false,
    textStyle: {},
    position: 'bottom',
    className: '',
    style: {},
  }

  render() {
    const {
      size,
      value,
      backgroundColor,
      foregroundColor,
      textStyle,
      thickness,
      rounded,
      position,
      className,
      style,
    } = this.props

    const baseTextStyle = {
      fontSize: size / 2.5,
      fontWeight: 'bold',
      fontFamily: 'sans-serif',
      fill: this.props.textColor || this.props.foregroundColor,
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
      <svg width={size} height={size} viewBox={viewBox} className={className} style={style}>
        {/* background */}
        <line
          x1={0}
          y1={verticalCoordinate}
          x2={size}
          y2={verticalCoordinate}
          strokeWidth={thickness}
          style={{ stroke: backgroundColor }}
        />

        {/* foreground */}
        <line
          x1={0}
          y1={verticalCoordinate}
          x2={fillSize}
          y2={verticalCoordinate}
          strokeWidth={thickness}
          style={{
            stroke: foregroundColor,
            strokeLinecap: lineEnd,
          }}
        />

        {/* Text */}
        <text style={textStyleOveride} className="circle-text" x="50%" y={textBottom} textAnchor="middle">
          {`${value}%`}
        </text>
      </svg>
    )
  }
}
