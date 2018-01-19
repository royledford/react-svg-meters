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
 * Circular meter
 */
var CircleMeter = function (_Component) {
  _inherits(CircleMeter, _Component);

  function CircleMeter() {
    _classCallCheck(this, CircleMeter);

    return _possibleConstructorReturn(this, (CircleMeter.__proto__ || Object.getPrototypeOf(CircleMeter)).apply(this, arguments));
  }

  _createClass(CircleMeter, [{
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
          progressStart = _props.progressStart,
          meterLength = _props.meterLength,
          className = _props.className,
          style = _props.style;


      var baseTextStyle = {
        fontSize: (size - thickness * 2) / 2.5,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        fill: this.props.textColor || this.props.foregroundColor

        // The stroke width originates at the center of the element.
        // Reduce the radius to account for extra width the stroke creates.
      };var radius = (size - thickness) / 2;
      var viewBox = '0 0 ' + size + ' ' + size;

      var circumference = radius * Math.PI * 2;
      var meterPercentage = meterLength / 360;
      var _meterLength = meterPercentage * circumference;

      var progressPercentage = value * meterPercentage / 100;
      var progressLength = circumference * progressPercentage;

      // Make sure a valid value is passed (use 0 if not)
      var _progressStart = progressStart - 90;
      if (progressStart < 0 || progressStart > 360) {
        _progressStart = -90;
      }

      var lineEnd = rounded ? 'round' : 'butt';
      var textStyleOveride = Object.assign({}, baseTextStyle, textStyle);

      return _react2.default.createElement(
        'svg',
        { width: size, height: size, viewBox: viewBox, className: className, style: style },
        _react2.default.createElement('circle', {
          cx: size / 2,
          cy: size / 2,
          r: radius,
          strokeWidth: thickness + 'px',
          transform: 'rotate(' + _progressStart + ' ' + size / 2 + ' ' + size / 2 + ')',
          style: {
            fill: 'none',
            stroke: backgroundColor,
            strokeLinecap: lineEnd,
            strokeDasharray: circumference,
            strokeDashoffset: circumference - _meterLength,
            transition: 'stroke-dashoffset 200ms linear'
          }
        }),
        _react2.default.createElement('circle', {
          cx: size / 2,
          cy: size / 2,
          r: radius,
          strokeWidth: thickness + 'px',
          transform: 'rotate(' + _progressStart + ' ' + size / 2 + ' ' + size / 2 + ')',
          style: {
            fill: 'none',
            stroke: foregroundColor,
            strokeLinecap: lineEnd,
            strokeDasharray: circumference,
            strokeDashoffset: circumference - progressLength,
            transition: 'stroke-dashoffset 200ms linear'
          }
        }),
        _react2.default.createElement(
          'text',
          { style: textStyleOveride, className: 'circle-text', x: '50%', y: '50%', dy: '.3em', textAnchor: 'middle' },
          value + '%'
        )
      );
    }
  }]);

  return CircleMeter;
}(_react.Component);

CircleMeter.propTypes = {
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
  /** Start position of the progress portion of the meter graphic in degrees. Must be between 0 and 360. */
  progressStart: _propTypes2.default.number,
  /** The arc length in degrees for the meter graphic. For example, a value of 90 would produce a meter that fills 25% of a circle. */
  meterLength: _propTypes2.default.number,
  /** If true, will round the ends of the meter graphic. */
  rounded: _propTypes2.default.bool,
  /** Override the inline styles of the text object. Must be a valid style object. */
  textStyle: _propTypes2.default.object,
  /** Name of a css class that can be applied to the root SVG element of the meter. */
  className: _propTypes2.default.string,
  /** A style object that can be applied to the root SVG element of the meter. */
  style: _propTypes2.default.object
};
CircleMeter.defaultProps = {
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
  style: {}
};
exports.default = CircleMeter;