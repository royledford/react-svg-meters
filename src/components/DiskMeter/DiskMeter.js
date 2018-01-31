import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Displays a disk shaped meter that fills from bottom to top. Disk meters can
 * be shown with or without a border.
 *
 * Disk meters are great for showing the level or how full something is.
 */
export default class DiskMeter extends Component {
  static propTypes = {
    /** A number representing the percentage to fill on the meter. Must be between 0 and 100. */
    value: PropTypes.number.isRequired,
    /** Size of the meter in pixels. */
    size: PropTypes.number,
    /** The width of the ring on the meter graphic. */
    thickness: PropTypes.number,
    /** Background color for the meter graphic. */
    backgroundColor: PropTypes.string,
    /** Color of the border ring on the meter graphic. */
    borderColor: PropTypes.string,
    /** Color of the text in the meter graphic. */
    textColor: PropTypes.string,
    /** Override the inline styles of the text object. Must be a valid style object. */
    textStyle: PropTypes.object,
    /** If true, a ring will be shown around the disk meter graphic. */
    showBorder: PropTypes.bool,
    /** Name of a css class that can be applied to the root SVG element of the meter. */
    className: PropTypes.string,
    /** A style object that can be applied to the root SVG element of the meter. */
    style: PropTypes.object,
  }
  static defaultProps = {
    size: 200,
    thickness: 6,
    backgroundColor: '#7FB2F0',
    borderColor: '#35478C',
    textColor: '#35478C',
    textStyle: {},
    showBorder: true,
    className: '',
    style: {},
  }

  render() {
    const { size, value, backgroundColor, borderColor, textStyle, className, style } = this.props

    // handle case with no border
    const thickness = this.props.showBorder ? this.props.thickness : 0

    const baseTextStyle = {
      fontSize: (size - thickness * 2) / 2.8,
      fontWeight: 'bold',
      fontFamily: 'sans-serif',
      fill: this.props.textColor,
    }

    // The stroke is based on the center of the thickness,
    // we'll remove the extra width to fit the size.
    const radius = (size - thickness) / 2
    const viewBox = `0 0 ${size} ${size}`

    // handle cases where the outer stroke width is to large and the inner
    // circle radius is a negative number.
    let innerRadius = radius - thickness
    innerRadius = innerRadius < 0 ? 0 : innerRadius

    // Height of fill percentage
    const fillSize = value * (innerRadius * 2) / 100

    // bottom of the fill disk
    // const diskTop = innerRadius * 2 - fillSize
    const diskTop = size - fillSize - thickness * 1.5

    // generate a unique id for the svg mask
    const uniqueId =
      'mask_' +
      new Date().valueOf() +
      Math.random()
        .toFixed(16)
        .substring(2)

    let textStyleOveride = { ...baseTextStyle, ...textStyle }

    return (
      <svg width={size} height={size} viewBox={viewBox} className={className} style={style}>
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
          style={{ stroke: borderColor, fill: 'none' }}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${thickness}px`}
        />

        {/* foreground */}
        <circle
          style={{ fill: backgroundColor }}
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
