import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Block style meter
 */
export default class BlockMeter extends Component {
  static propTypes = {
    /** A number representing the percentage to fill on the meter. Must be between 0 and 100. */
    value: PropTypes.number.isRequired,
    /** Size in pixels of the meter. */
    size: PropTypes.number,
    /** Background color for the meter graphic. */
    backgroundColor: PropTypes.string,
    /** Foreground color for the meter graphic. */
    foregroundColor: PropTypes.string,
    /** Color of the text object in the meter graphic. */
    textColor: PropTypes.string,
    /** Override the inline styles of the text object using SVG styles. Must be a valid style object. */
    textStyle: PropTypes.object,
    /** Direction for the progress portion of the meter. */
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
    /** Name of a css class that can be applied to the root SVG element of the meter. */
    className: PropTypes.string,
    /** A style object that can be applied to the root SVG element of the meter. */
    style: PropTypes.object,
  }
  static defaultProps = {
    size: 200,
    backgroundColor: '#7FB2F0',
    foregroundColor: '#35478C',
    textColor: '#4E7AC7',
    textStyle: {},
    direction: 'horizontal',
    className: '',
    style: {},
  }

  render() {
    const { size, value, backgroundColor, foregroundColor, textStyle, direction, className, style } = this.props

    const baseTextStyle = {
      fontSize: size / 2.5,
      fontWeight: 'bold',
      fill: this.props.textColor,
      fontFamily: 'sans-serif',
    }

    const middle = size / 2
    const viewBox = `0 0 ${size} ${size}`
    const fillSize = value * size / 100

    let textStyleOveride = { ...baseTextStyle, ...textStyle }

    let progressBar = (
      <line x1={0} y1={middle} x2={fillSize} y2={middle} style={{ stroke: foregroundColor }} strokeWidth={size} />
    )
    if (direction === 'vertical')
      progressBar = (
        <line
          x1={middle}
          y1={size}
          x2={middle}
          y2={size - fillSize}
          style={{ stroke: foregroundColor }}
          strokeWidth={size}
        />
      )

    return (
      <svg width={size} height={size} viewBox={viewBox} className={className} style={style}>
        {/* background */}
        <line x1={0} y1={middle} x2={size} y2={middle} style={{ stroke: backgroundColor }} strokeWidth={size} />
        {/* foreground */}
        {progressBar}
        <text style={textStyleOveride} x="50%" y="50%" dy=".3em" textAnchor="middle">
          {`${value}%`}
        </text>
      </svg>
    )
  }
}
