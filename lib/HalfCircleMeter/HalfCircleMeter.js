'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Semi-circle style meter
 */
var HalfCircleMeter = function (_Component) {
  _inherits(HalfCircleMeter, _Component);

  function HalfCircleMeter() {
    _classCallCheck(this, HalfCircleMeter);

    return _possibleConstructorReturn(this, (HalfCircleMeter.__proto__ || Object.getPrototypeOf(HalfCircleMeter)).apply(this, arguments));
  }

  _createClass(HalfCircleMeter, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          size = _props.size,
          thickness = _props.thickness,
          value = _props.value,
          backgroundColor = _props.backgroundColor,
          foregroundColor = _props.foregroundColor,
          rounded = _props.rounded,
          textStyle = _props.textStyle,
          className = _props.className,
          style = _props.style;


      var baseTextStyle = {
        fontSize: (size - thickness * 2) / 2.8,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        fill: this.props.textColor || this.props.foregroundColor

        // The stroke width originates at the center of the element.
        // Reduce the radius to account for extra width the stroke creates.
      };var radius = (size - thickness) / 2;
      var viewBox = '0 0 ' + size + ' ' + size / 2;
      var internalWidth = size - thickness;

      // start point of progress arc.
      var startX = thickness / 2;
      var startY = size / 2;

      var circumference = radius * Math.PI * 2 / 2;
      var meterLength = circumference * value / 100;
      var progressLength = circumference - meterLength;

      var lineEnd = rounded ? 'round' : 'butt';
      var textStyleOveride = Object.assign({}, baseTextStyle, textStyle);

      return _react2.default.createElement(
        'svg',
        { width: size, height: size / 2, viewBox: viewBox, className: className, style: style },
        _react2.default.createElement('path', {
          d: 'M' + startX + ',' + startY + 'a' + radius + ',' + radius + ' 0 0,1 ' + internalWidth + ',0',
          strokeMiterlimit: '10',
          strokeWidth: thickness + 'px',
          style: { fill: 'none', stroke: backgroundColor }
        }),
        _react2.default.createElement('path', {
          d: 'M' + startX + ',' + startY + 'a' + radius + ',' + radius + ' 0 0,1 ' + internalWidth + ',0',
          stroke: foregroundColor,
          strokeMiterlimit: '10',
          strokeWidth: thickness + 'px',
          style: {
            fill: 'none',
            stroke: foregroundColor,
            strokeLinecap: lineEnd,
            strokeDasharray: circumference,
            strokeDashoffset: progressLength,
            transition: 'stroke-dashoffset 200ms linear'
          }
        }),
        _react2.default.createElement(
          'text',
          {
            style: textStyleOveride,
            className: 'circle-text',
            x: '50%',
            y: '100%',
            dy: '-.08em',
            textAnchor: 'middle',
            alignmentBaseline: 'baseline' },
          value + '%'
        )
      );
    }
  }]);

  return HalfCircleMeter;
}(_react.Component);

HalfCircleMeter.propTypes = {
  /** A number representing the percentage to fill on the meter. Must be between 0 and 100. */
  value: _propTypes2.default.number.isRequired,
  /** Size of the meter in pixels. */
  size: _propTypes2.default.number,
  /** The width of the line in the meter graphic. */
  thickness: _propTypes2.default.number,
  /** Background color for the meter graphic. */
  backgroundColor: _propTypes2.default.string,
  /** Foreground color for the meter graphic. */
  foregroundColor: _propTypes2.default.string,
  /** Color of the text object in the meter graphic. */
  textColor: _propTypes2.default.string,
  /** If true, will round the ends of the meter graphic. */
  rounded: _propTypes2.default.bool,
  /** Override the inline styles of the text object. Must be a valid style object. */
  textStyle: _propTypes2.default.object,
  /** Name of a css class that can be applied to the root SVG element of the meter. */
  className: _propTypes2.default.string,
  /** A style object that can be applied to the root SVG element of the meter. */
  style: _propTypes2.default.object
};
HalfCircleMeter.defaultProps = {
  size: 200,
  thickness: 16,
  backgroundColor: '#7FB2F0',
  foregroundColor: '#35478C',
  rounded: false,
  textStyle: {},
  className: '',
  style: {}
};
exports.default = HalfCircleMeter;