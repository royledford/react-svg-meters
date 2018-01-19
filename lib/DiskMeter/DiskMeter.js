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
 * Disk shaped meter
 */
var DiskMeter = function (_Component) {
  _inherits(DiskMeter, _Component);

  function DiskMeter() {
    _classCallCheck(this, DiskMeter);

    return _possibleConstructorReturn(this, (DiskMeter.__proto__ || Object.getPrototypeOf(DiskMeter)).apply(this, arguments));
  }

  _createClass(DiskMeter, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          size = _props.size,
          value = _props.value,
          backgroundColor = _props.backgroundColor,
          borderColor = _props.borderColor,
          textStyle = _props.textStyle,
          className = _props.className,
          style = _props.style;

      // handle case with no border

      var thickness = this.props.showBorder ? this.props.thickness : 0;

      var baseTextStyle = {
        fontSize: (size - thickness * 2) / 2.8,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        fill: this.props.textColor

        // The stroke is based on the center of the thickness,
        // we'll remove the extra width to fit the size.
      };var radius = (size - thickness) / 2;
      var viewBox = '0 0 ' + size + ' ' + size;

      // handle cases where the outer stroke width is to large and the inner
      // circle radius is a negative number.
      var innerRadius = radius - thickness;
      innerRadius = innerRadius < 0 ? 0 : innerRadius;

      // Height of fill percentage
      var fillSize = value * (innerRadius * 2) / 100;

      // bottom of the fill disk
      // const diskTop = innerRadius * 2 - fillSize
      var diskTop = size - fillSize - thickness * 1.5;

      // generate a unique id for the svg mask
      var uniqueId = 'mask_' + new Date().valueOf() + Math.random().toFixed(16).substring(2);

      var textStyleOveride = Object.assign({}, baseTextStyle, textStyle);

      return _react2.default.createElement(
        'svg',
        { width: size, height: size, viewBox: viewBox, className: className, style: style },
        _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement(
            'mask',
            { id: uniqueId, x: '0', y: '0', width: size, height: size },
            _react2.default.createElement('rect', {
              x: '0',
              y: diskTop,
              width: size,
              height: fillSize,
              style: { stroke: 'none', fill: '#fff', transition: 'all 200ms linear' }
            })
          )
        ),
        _react2.default.createElement('circle', {
          style: { stroke: borderColor, fill: 'none' },
          cx: size / 2,
          cy: size / 2,
          r: radius,
          strokeWidth: thickness + 'px'
        }),
        _react2.default.createElement('circle', {
          style: { fill: backgroundColor },
          cx: size / 2,
          cy: size / 2,
          r: innerRadius,
          strokeWidth: 0,
          mask: 'url(#' + uniqueId + ')'
        }),
        _react2.default.createElement(
          'text',
          { style: textStyleOveride, className: 'circle-text', x: '50%', y: '50%', dy: '.3em', textAnchor: 'middle' },
          value + '%'
        )
      );
    }
  }]);

  return DiskMeter;
}(_react.Component);

DiskMeter.propTypes = {
  /** A number representing the percentage to fill on the meter. Must be between 0 and 100. */
  value: _propTypes2.default.number.isRequired,
  /** Size of the meter in pixels. */
  size: _propTypes2.default.number,
  /** The width of the ring on the meter graphic. */
  thickness: _propTypes2.default.number,
  /** Background color for the meter graphic. */
  backgroundColor: _propTypes2.default.string,
  /** Color of the border ring on the meter graphic. */
  borderColor: _propTypes2.default.string,
  /** Color of the text in the meter graphic. */
  textColor: _propTypes2.default.string,
  /** Override the inline styles of the text object. Must be a valid style object. */
  textStyle: _propTypes2.default.object,
  /** If true, a ring will be shown around the disk meter graphic. */
  showBorder: _propTypes2.default.bool,
  /** Name of a css class that can be applied to the root SVG element of the meter. */
  className: _propTypes2.default.string,
  /** A style object that can be applied to the root SVG element of the meter. */
  style: _propTypes2.default.object
};
DiskMeter.defaultProps = {
  size: 200,
  thickness: 6,
  backgroundColor: '#7FB2F0',
  borderColor: '#35478C',
  textColor: '#35478C',
  rounded: false,
  textStyle: {},
  showBorder: true,
  className: '',
  style: {}
};
exports.default = DiskMeter;