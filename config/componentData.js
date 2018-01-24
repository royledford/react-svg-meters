module.exports = [{"name":"BlockMeter","description":"Block style meter","props":{"value":{"type":{"name":"number"},"required":true,"description":"A number representing the percentage to fill on the meter. Must be between 0 and 100."},"size":{"type":{"name":"number"},"required":false,"description":"Size in pixels of the meter.","defaultValue":{"value":"200","computed":false}},"backgroundColor":{"type":{"name":"string"},"required":false,"description":"Background color for the meter graphic.","defaultValue":{"value":"'#7FB2F0'","computed":false}},"foregroundColor":{"type":{"name":"string"},"required":false,"description":"Foreground color for the meter graphic.","defaultValue":{"value":"'#35478C'","computed":false}},"textColor":{"type":{"name":"string"},"required":false,"description":"Color of the text object in the meter graphic.","defaultValue":{"value":"'#4E7AC7'","computed":false}},"textStyle":{"type":{"name":"object"},"required":false,"description":"Override the inline styles of the text object using SVG styles. Must be a valid style object.","defaultValue":{"value":"{}","computed":false}},"direction":{"type":{"name":"enum","value":[{"value":"'horizontal'","computed":false},{"value":"'vertical'","computed":false}]},"required":false,"description":"Direction for the progress portion of the meter.","defaultValue":{"value":"'horizontal'","computed":false}},"className":{"type":{"name":"string"},"required":false,"description":"Name of a css class that can be applied to the root SVG element of the meter.","defaultValue":{"value":"''","computed":false}},"style":{"type":{"name":"object"},"required":false,"description":"A style object that can be applied to the root SVG element of the meter.","defaultValue":{"value":"{}","computed":false}}},"code":"import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\n\n/**\n * Block style meter\n */\nexport default class BlockMeter extends Component {\n  static propTypes = {\n    /** A number representing the percentage to fill on the meter. Must be between 0 and 100. */\n    value: PropTypes.number.isRequired,\n    /** Size in pixels of the meter. */\n    size: PropTypes.number,\n    /** Background color for the meter graphic. */\n    backgroundColor: PropTypes.string,\n    /** Foreground color for the meter graphic. */\n    foregroundColor: PropTypes.string,\n    /** Color of the text object in the meter graphic. */\n    textColor: PropTypes.string,\n    /** Override the inline styles of the text object using SVG styles. Must be a valid style object. */\n    textStyle: PropTypes.object,\n    /** Direction for the progress portion of the meter. */\n    direction: PropTypes.oneOf(['horizontal', 'vertical']),\n    /** Name of a css class that can be applied to the root SVG element of the meter. */\n    className: PropTypes.string,\n    /** A style object that can be applied to the root SVG element of the meter. */\n    style: PropTypes.object,\n  }\n  static defaultProps = {\n    size: 200,\n    backgroundColor: '#7FB2F0',\n    foregroundColor: '#35478C',\n    textColor: '#4E7AC7',\n    textStyle: {},\n    direction: 'horizontal',\n    className: '',\n    style: {},\n  }\n\n  render() {\n    const { size, value, backgroundColor, foregroundColor, textStyle, direction, className, style } = this.props\n\n    const baseTextStyle = {\n      fontSize: size / 2.5,\n      fontWeight: 'bold',\n      fill: this.props.textColor,\n      fontFamily: 'sans-serif',\n    }\n\n    const middle = size / 2\n    const viewBox = `0 0 ${size} ${size}`\n    const fillSize = value * size / 100\n\n    let textStyleOveride = { ...baseTextStyle, ...textStyle }\n\n    let progressBar = (\n      <line x1={0} y1={middle} x2={fillSize} y2={middle} style={{ stroke: foregroundColor }} strokeWidth={size} />\n    )\n    if (direction === 'vertical')\n      progressBar = (\n        <line\n          x1={middle}\n          y1={size}\n          x2={middle}\n          y2={size - fillSize}\n          style={{ stroke: foregroundColor }}\n          strokeWidth={size}\n        />\n      )\n\n    return (\n      <svg width={size} height={size} viewBox={viewBox} className={className} style={style}>\n        {/* background */}\n        <line x1={0} y1={middle} x2={size} y2={middle} style={{ stroke: backgroundColor }} strokeWidth={size} />\n        {/* foreground */}\n        {progressBar}\n        <text style={textStyleOveride} x=\"50%\" y=\"50%\" dy=\".3em\" textAnchor=\"middle\">\n          {`${value}%`}\n        </text>\n      </svg>\n    )\n  }\n}\n","examples":[{"name":"ExampleBlockMeter","description":"","code":"import React from 'react'\nimport BlockMeter from 'react-svg-meters/BlockMeter'\n\nexport default function ExampleBlockMeter() {\n  return <BlockMeter value={35} size={150} />\n}\n"}]},{"name":"CircleMeter","description":"Circular style meter","props":{"value":{"type":{"name":"number"},"required":true,"description":"A number representing the percentage to fill on the meter. Must be between 0 and 100."},"size":{"type":{"name":"number"},"required":false,"description":"Size of the meter in pixels.","defaultValue":{"value":"200","computed":false}},"thickness":{"type":{"name":"number"},"required":false,"description":"The width of the line in the meter graphic.","defaultValue":{"value":"16","computed":false}},"backgroundColor":{"type":{"name":"string"},"required":false,"description":"Background color for the meter graphic.","defaultValue":{"value":"'#7FB2F0'","computed":false}},"foregroundColor":{"type":{"name":"string"},"required":false,"description":"Foreground color for the meter graphic.","defaultValue":{"value":"'#35478C'","computed":false}},"textColor":{"type":{"name":"string"},"required":false,"description":"Color of the text object in the meter graphic.","defaultValue":{"value":"null","computed":false}},"progressStart":{"type":{"name":"number"},"required":false,"description":"Start position of the progress portion of the meter graphic in degrees. Must be between 0 and 360.","defaultValue":{"value":"0","computed":false}},"meterLength":{"type":{"name":"number"},"required":false,"description":"The arc length in degrees for the meter graphic. For example, a value of 90 would produce a meter that fills 25% of a circle.","defaultValue":{"value":"360","computed":false}},"rounded":{"type":{"name":"bool"},"required":false,"description":"If true, will round the ends of the meter graphic.","defaultValue":{"value":"false","computed":false}},"textStyle":{"type":{"name":"object"},"required":false,"description":"Override the inline styles of the text object. Must be a valid style object.","defaultValue":{"value":"{}","computed":false}},"className":{"type":{"name":"string"},"required":false,"description":"Name of a css class that can be applied to the root SVG element of the meter.","defaultValue":{"value":"''","computed":false}},"style":{"type":{"name":"object"},"required":false,"description":"A style object that can be applied to the root SVG element of the meter.","defaultValue":{"value":"{}","computed":false}}},"code":"import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\n\n/**\n * Circular style meter\n */\nexport default class CircleMeter extends Component {\n  static propTypes = {\n    /** A number representing the percentage to fill on the meter. Must be between 0 and 100. */\n    value: PropTypes.number.isRequired,\n    /** Size of the meter in pixels. */\n    size: PropTypes.number,\n    /** The width of the line in the meter graphic. */\n    thickness: PropTypes.number,\n    /** Background color for the meter graphic. */\n    backgroundColor: PropTypes.string,\n    /** Foreground color for the meter graphic. */\n    foregroundColor: PropTypes.string,\n    /** Color of the text object in the meter graphic. */\n    textColor: PropTypes.string,\n    /** Start position of the progress portion of the meter graphic in degrees. Must be between 0 and 360. */\n    progressStart: PropTypes.number,\n    /** The arc length in degrees for the meter graphic. For example, a value of 90 would produce a meter that fills 25% of a circle. */\n    meterLength: PropTypes.number,\n    /** If true, will round the ends of the meter graphic. */\n    rounded: PropTypes.bool,\n    /** Override the inline styles of the text object. Must be a valid style object. */\n    textStyle: PropTypes.object,\n    /** Name of a css class that can be applied to the root SVG element of the meter. */\n    className: PropTypes.string,\n    /** A style object that can be applied to the root SVG element of the meter. */\n    style: PropTypes.object,\n  }\n  static defaultProps = {\n    size: 200,\n    thickness: 16,\n    backgroundColor: '#7FB2F0',\n    foregroundColor: '#35478C',\n    textColor: null,\n    progressStart: 0, // in degrees\n    meterLength: 360, // in degrees\n    rounded: false,\n    textStyle: {},\n    className: '',\n    style: {},\n  }\n\n  render() {\n    const {\n      size,\n      thickness,\n      value,\n      backgroundColor,\n      foregroundColor,\n      rounded,\n      textStyle,\n      progressStart,\n      meterLength,\n      className,\n      style,\n    } = this.props\n\n    const baseTextStyle = {\n      fontSize: (size - thickness * 2) / 2.5,\n      fontWeight: 'bold',\n      fontFamily: 'sans-serif',\n      fill: this.props.textColor || this.props.foregroundColor,\n    }\n\n    // The stroke width originates at the center of the element.\n    // Reduce the radius to account for extra width the stroke creates.\n    const radius = (size - thickness) / 2\n    const viewBox = `0 0 ${size} ${size}`\n\n    const circumference = radius * Math.PI * 2\n    const meterPercentage = meterLength / 360\n    const _meterLength = meterPercentage * circumference\n\n    const progressPercentage = value * meterPercentage / 100\n    const progressLength = circumference * progressPercentage\n\n    // Make sure a valid value is passed (use 0 if not)\n    let _progressStart = progressStart - 90\n    if (progressStart < 0 || progressStart > 360) {\n      _progressStart = -90\n    }\n\n    let lineEnd = rounded ? 'round' : 'butt'\n    let textStyleOveride = { ...baseTextStyle, ...textStyle }\n\n    return (\n      <svg width={size} height={size} viewBox={viewBox} className={className} style={style}>\n        {/* background circle */}\n        <circle\n          cx={size / 2}\n          cy={size / 2}\n          r={radius}\n          strokeWidth={`${thickness}px`}\n          transform={`rotate(${_progressStart} ${size / 2} ${size / 2})`}\n          style={{\n            fill: 'none',\n            stroke: backgroundColor,\n            strokeLinecap: lineEnd,\n            strokeDasharray: circumference,\n            strokeDashoffset: circumference - _meterLength,\n            transition: 'stroke-dashoffset 200ms linear',\n          }}\n        />\n\n        {/* foreground circle */}\n        <circle\n          cx={size / 2}\n          cy={size / 2}\n          r={radius}\n          strokeWidth={`${thickness}px`}\n          transform={`rotate(${_progressStart} ${size / 2} ${size / 2})`}\n          style={{\n            fill: 'none',\n            stroke: foregroundColor,\n            strokeLinecap: lineEnd,\n            strokeDasharray: circumference,\n            strokeDashoffset: circumference - progressLength,\n            transition: 'stroke-dashoffset 200ms linear',\n          }}\n        />\n\n        <text style={textStyleOveride} className=\"circle-text\" x=\"50%\" y=\"50%\" dy=\".3em\" textAnchor=\"middle\">\n          {`${value}%`}\n        </text>\n      </svg>\n    )\n  }\n}\n","examples":[]},{"name":"DiskMeter","description":"Disk shaped meter","props":{"value":{"type":{"name":"number"},"required":true,"description":"A number representing the percentage to fill on the meter. Must be between 0 and 100."},"size":{"type":{"name":"number"},"required":false,"description":"Size of the meter in pixels.","defaultValue":{"value":"200","computed":false}},"thickness":{"type":{"name":"number"},"required":false,"description":"The width of the ring on the meter graphic.","defaultValue":{"value":"6","computed":false}},"backgroundColor":{"type":{"name":"string"},"required":false,"description":"Background color for the meter graphic.","defaultValue":{"value":"'#7FB2F0'","computed":false}},"borderColor":{"type":{"name":"string"},"required":false,"description":"Color of the border ring on the meter graphic.","defaultValue":{"value":"'#35478C'","computed":false}},"textColor":{"type":{"name":"string"},"required":false,"description":"Color of the text in the meter graphic.","defaultValue":{"value":"'#35478C'","computed":false}},"textStyle":{"type":{"name":"object"},"required":false,"description":"Override the inline styles of the text object. Must be a valid style object.","defaultValue":{"value":"{}","computed":false}},"showBorder":{"type":{"name":"bool"},"required":false,"description":"If true, a ring will be shown around the disk meter graphic.","defaultValue":{"value":"true","computed":false}},"className":{"type":{"name":"string"},"required":false,"description":"Name of a css class that can be applied to the root SVG element of the meter.","defaultValue":{"value":"''","computed":false}},"style":{"type":{"name":"object"},"required":false,"description":"A style object that can be applied to the root SVG element of the meter.","defaultValue":{"value":"{}","computed":false}},"rounded":{"defaultValue":{"value":"false","computed":false}}},"code":"import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\n\n/**\n * Disk shaped meter\n */\nexport default class DiskMeter extends Component {\n  static propTypes = {\n    /** A number representing the percentage to fill on the meter. Must be between 0 and 100. */\n    value: PropTypes.number.isRequired,\n    /** Size of the meter in pixels. */\n    size: PropTypes.number,\n    /** The width of the ring on the meter graphic. */\n    thickness: PropTypes.number,\n    /** Background color for the meter graphic. */\n    backgroundColor: PropTypes.string,\n    /** Color of the border ring on the meter graphic. */\n    borderColor: PropTypes.string,\n    /** Color of the text in the meter graphic. */\n    textColor: PropTypes.string,\n    /** Override the inline styles of the text object. Must be a valid style object. */\n    textStyle: PropTypes.object,\n    /** If true, a ring will be shown around the disk meter graphic. */\n    showBorder: PropTypes.bool,\n    /** Name of a css class that can be applied to the root SVG element of the meter. */\n    className: PropTypes.string,\n    /** A style object that can be applied to the root SVG element of the meter. */\n    style: PropTypes.object,\n  }\n  static defaultProps = {\n    size: 200,\n    thickness: 6,\n    backgroundColor: '#7FB2F0',\n    borderColor: '#35478C',\n    textColor: '#35478C',\n    rounded: false,\n    textStyle: {},\n    showBorder: true,\n    className: '',\n    style: {},\n  }\n\n  render() {\n    const { size, value, backgroundColor, borderColor, textStyle, className, style } = this.props\n\n    // handle case with no border\n    const thickness = this.props.showBorder ? this.props.thickness : 0\n\n    const baseTextStyle = {\n      fontSize: (size - thickness * 2) / 2.8,\n      fontWeight: 'bold',\n      fontFamily: 'sans-serif',\n      fill: this.props.textColor,\n    }\n\n    // The stroke is based on the center of the thickness,\n    // we'll remove the extra width to fit the size.\n    const radius = (size - thickness) / 2\n    const viewBox = `0 0 ${size} ${size}`\n\n    // handle cases where the outer stroke width is to large and the inner\n    // circle radius is a negative number.\n    let innerRadius = radius - thickness\n    innerRadius = innerRadius < 0 ? 0 : innerRadius\n\n    // Height of fill percentage\n    const fillSize = value * (innerRadius * 2) / 100\n\n    // bottom of the fill disk\n    // const diskTop = innerRadius * 2 - fillSize\n    const diskTop = size - fillSize - thickness * 1.5\n\n    // generate a unique id for the svg mask\n    const uniqueId =\n      'mask_' +\n      new Date().valueOf() +\n      Math.random()\n        .toFixed(16)\n        .substring(2)\n\n    let textStyleOveride = { ...baseTextStyle, ...textStyle }\n\n    return (\n      <svg width={size} height={size} viewBox={viewBox} className={className} style={style}>\n        <defs>\n          <mask id={uniqueId} x=\"0\" y=\"0\" width={size} height={size}>\n            <rect\n              x=\"0\"\n              y={diskTop}\n              width={size}\n              height={fillSize}\n              style={{ stroke: 'none', fill: '#fff', transition: 'all 200ms linear' }}\n            />\n          </mask>\n        </defs>\n\n        {/* border circle */}\n        <circle\n          style={{ stroke: borderColor, fill: 'none' }}\n          cx={size / 2}\n          cy={size / 2}\n          r={radius}\n          strokeWidth={`${thickness}px`}\n        />\n\n        {/* foreground */}\n        <circle\n          style={{ fill: backgroundColor }}\n          cx={size / 2}\n          cy={size / 2}\n          r={innerRadius}\n          strokeWidth={0}\n          mask={`url(#${uniqueId})`}\n        />\n\n        <text style={textStyleOveride} className=\"circle-text\" x=\"50%\" y=\"50%\" dy=\".3em\" textAnchor=\"middle\">\n          {`${value}%`}\n        </text>\n      </svg>\n    )\n  }\n}\n","examples":[]},{"name":"HalfCircleMeter","description":"Semi-circle style meter","props":{"value":{"type":{"name":"number"},"required":true,"description":"A number representing the percentage to fill on the meter. Must be between 0 and 100."},"size":{"type":{"name":"number"},"required":false,"description":"Size of the meter in pixels.","defaultValue":{"value":"200","computed":false}},"thickness":{"type":{"name":"number"},"required":false,"description":"The width of the line in the meter graphic.","defaultValue":{"value":"16","computed":false}},"backgroundColor":{"type":{"name":"string"},"required":false,"description":"Background color for the meter graphic.","defaultValue":{"value":"'#7FB2F0'","computed":false}},"foregroundColor":{"type":{"name":"string"},"required":false,"description":"Foreground color for the meter graphic.","defaultValue":{"value":"'#35478C'","computed":false}},"textColor":{"type":{"name":"string"},"required":false,"description":"Color of the text object in the meter graphic."},"rounded":{"type":{"name":"bool"},"required":false,"description":"If true, will round the ends of the meter graphic.","defaultValue":{"value":"false","computed":false}},"textStyle":{"type":{"name":"object"},"required":false,"description":"Override the inline styles of the text object. Must be a valid style object.","defaultValue":{"value":"{}","computed":false}},"className":{"type":{"name":"string"},"required":false,"description":"Name of a css class that can be applied to the root SVG element of the meter.","defaultValue":{"value":"''","computed":false}},"style":{"type":{"name":"object"},"required":false,"description":"A style object that can be applied to the root SVG element of the meter.","defaultValue":{"value":"{}","computed":false}}},"code":"import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\n\n/**\n * Semi-circle style meter\n */\nexport default class HalfCircleMeter extends Component {\n  static propTypes = {\n    /** A number representing the percentage to fill on the meter. Must be between 0 and 100. */\n    value: PropTypes.number.isRequired,\n    /** Size of the meter in pixels. */\n    size: PropTypes.number,\n    /** The width of the line in the meter graphic. */\n    thickness: PropTypes.number,\n    /** Background color for the meter graphic. */\n    backgroundColor: PropTypes.string,\n    /** Foreground color for the meter graphic. */\n    foregroundColor: PropTypes.string,\n    /** Color of the text object in the meter graphic. */\n    textColor: PropTypes.string,\n    /** If true, will round the ends of the meter graphic. */\n    rounded: PropTypes.bool,\n    /** Override the inline styles of the text object. Must be a valid style object. */\n    textStyle: PropTypes.object,\n    /** Name of a css class that can be applied to the root SVG element of the meter. */\n    className: PropTypes.string,\n    /** A style object that can be applied to the root SVG element of the meter. */\n    style: PropTypes.object,\n  }\n  static defaultProps = {\n    size: 200,\n    thickness: 16,\n    backgroundColor: '#7FB2F0',\n    foregroundColor: '#35478C',\n    rounded: false,\n    textStyle: {},\n    className: '',\n    style: {},\n  }\n\n  render() {\n    const {\n      size,\n      thickness,\n      value,\n      backgroundColor,\n      foregroundColor,\n      rounded,\n      textStyle,\n      className,\n      style,\n    } = this.props\n\n    const baseTextStyle = {\n      fontSize: (size - thickness * 2) / 2.8,\n      fontWeight: 'bold',\n      fontFamily: 'sans-serif',\n      fill: this.props.textColor || this.props.foregroundColor,\n    }\n\n    // The stroke width originates at the center of the element.\n    // Reduce the radius to account for extra width the stroke creates.\n    const radius = (size - thickness) / 2\n    const viewBox = `0 0 ${size} ${size / 2}`\n    const internalWidth = size - thickness\n\n    // start point of progress arc.\n    const startX = thickness / 2\n    const startY = size / 2\n\n    const circumference = radius * Math.PI * 2 / 2\n    const meterLength = circumference * value / 100\n    const progressLength = circumference - meterLength\n\n    let lineEnd = rounded ? 'round' : 'butt'\n    let textStyleOveride = { ...baseTextStyle, ...textStyle }\n\n    return (\n      <svg width={size} height={size / 2} viewBox={viewBox} className={className} style={style}>\n        {/* background */}\n        <path\n          d={`M${startX},${startY}a${radius},${radius} 0 0,1 ${internalWidth},0`}\n          strokeMiterlimit=\"10\"\n          strokeWidth={`${thickness}px`}\n          style={{ fill: 'none', stroke: backgroundColor }}\n        />\n\n        {/* foreground */}\n        <path\n          d={`M${startX},${startY}a${radius},${radius} 0 0,1 ${internalWidth},0`}\n          stroke={foregroundColor}\n          strokeMiterlimit=\"10\"\n          strokeWidth={`${thickness}px`}\n          style={{\n            fill: 'none',\n            stroke: foregroundColor,\n            strokeLinecap: lineEnd,\n            strokeDasharray: circumference,\n            strokeDashoffset: progressLength,\n            transition: 'stroke-dashoffset 200ms linear',\n          }}\n        />\n\n        {/* Text */}\n        <text\n          style={textStyleOveride}\n          className=\"circle-text\"\n          x=\"50%\"\n          y=\"100%\"\n          dy=\"-.08em\"\n          textAnchor=\"middle\"\n          alignmentBaseline=\"baseline\">\n          {`${value}%`}\n        </text>\n      </svg>\n    )\n  }\n}\n","examples":[]},{"name":"LineMeter","description":"Line style meter","props":{"value":{"type":{"name":"number"},"required":true,"description":"A number representing the percentage to fill on the meter. Must be between 0 and 100."},"size":{"type":{"name":"number"},"required":false,"description":"Size of the meter in pixels.","defaultValue":{"value":"200","computed":false}},"thickness":{"type":{"name":"number"},"required":false,"description":"The width of the line in the meter graphic.","defaultValue":{"value":"36","computed":false}},"backgroundColor":{"type":{"name":"string"},"required":false,"description":"Background color for the meter graphic.","defaultValue":{"value":"'#7FB2F0'","computed":false}},"foregroundColor":{"type":{"name":"string"},"required":false,"description":"Foreground color for the meter graphic.","defaultValue":{"value":"'#35478C'","computed":false}},"textColor":{"type":{"name":"string"},"required":false,"description":"Color of the text object in the meter graphic."},"rounded":{"type":{"name":"bool"},"required":false,"description":"If true, will round the ends of the meter graphic.","defaultValue":{"value":"false","computed":false}},"textStyle":{"type":{"name":"object"},"required":false,"description":"Override the inline styles of the text object. Must be a valid style object.","defaultValue":{"value":"{}","computed":false}},"position":{"type":{"name":"enum","value":[{"value":"'bottom'","computed":false},{"value":"'top'","computed":false}]},"required":false,"description":"Defines the position of the meter graphic.","defaultValue":{"value":"'bottom'","computed":false}},"className":{"type":{"name":"string"},"required":false,"description":"Name of a css class that can be applied to the root SVG element of the meter.","defaultValue":{"value":"''","computed":false}},"style":{"type":{"name":"object"},"required":false,"description":"A style object that can be applied to the root SVG element of the meter.","defaultValue":{"value":"{}","computed":false}}},"code":"import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\n\n/**\n * Line style meter\n */\nexport default class LineMeter extends Component {\n  static propTypes = {\n    /** A number representing the percentage to fill on the meter. Must be between 0 and 100. */\n    value: PropTypes.number.isRequired,\n    /** Size of the meter in pixels. */\n    size: PropTypes.number,\n    /** The width of the line in the meter graphic. */\n    thickness: PropTypes.number,\n    /** Background color for the meter graphic. */\n    backgroundColor: PropTypes.string,\n    /** Foreground color for the meter graphic. */\n    foregroundColor: PropTypes.string,\n    /** Color of the text object in the meter graphic. */\n    textColor: PropTypes.string,\n    /** If true, will round the ends of the meter graphic. */\n    rounded: PropTypes.bool,\n    /** Override the inline styles of the text object. Must be a valid style object. */\n    textStyle: PropTypes.object,\n    /** Defines the position of the meter graphic.  */\n    position: PropTypes.oneOf(['bottom', 'top']),\n    /** Name of a css class that can be applied to the root SVG element of the meter. */\n    className: PropTypes.string,\n    /** A style object that can be applied to the root SVG element of the meter. */\n    style: PropTypes.object,\n  }\n  static defaultProps = {\n    size: 200,\n    thickness: 36,\n    backgroundColor: '#7FB2F0',\n    foregroundColor: '#35478C',\n    rounded: false,\n    textStyle: {},\n    position: 'bottom',\n    className: '',\n    style: {},\n  }\n\n  render() {\n    const {\n      size,\n      value,\n      backgroundColor,\n      foregroundColor,\n      textStyle,\n      thickness,\n      rounded,\n      position,\n      className,\n      style,\n    } = this.props\n\n    const baseTextStyle = {\n      fontSize: size / 2.5,\n      fontWeight: 'bold',\n      fontFamily: 'sans-serif',\n      fill: this.props.textColor || this.props.foregroundColor,\n    }\n\n    let verticalCoordinate = size / 4 * 3\n    let textBottom = size / 3\n    if (position === 'top') {\n      verticalCoordinate = size / 4\n      textBottom = size / 4 * 3\n    }\n    const viewBox = `0 0 ${size} ${size}`\n    const fillSize = value * size / 100\n\n    let lineEnd = rounded ? 'round' : 'butt'\n    let textStyleOveride = { ...baseTextStyle, ...textStyle }\n\n    return (\n      <svg width={size} height={size} viewBox={viewBox} className={className} style={style}>\n        {/* background */}\n        <line\n          x1={0}\n          y1={verticalCoordinate}\n          x2={size}\n          y2={verticalCoordinate}\n          strokeWidth={thickness}\n          style={{ stroke: backgroundColor }}\n        />\n\n        {/* foreground */}\n        <line\n          x1={0}\n          y1={verticalCoordinate}\n          x2={fillSize}\n          y2={verticalCoordinate}\n          strokeWidth={thickness}\n          style={{\n            stroke: foregroundColor,\n            strokeLinecap: lineEnd,\n          }}\n        />\n\n        {/* Text */}\n        <text style={textStyleOveride} className=\"circle-text\" x=\"50%\" y={textBottom} textAnchor=\"middle\">\n          {`${value}%`}\n        </text>\n      </svg>\n    )\n  }\n}\n","examples":[]}]