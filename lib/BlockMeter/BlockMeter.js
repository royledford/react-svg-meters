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
 * Block style meter
 */
var BlockMeter = function (_Component) {
  _inherits(BlockMeter, _Component);

  function BlockMeter() {
    _classCallCheck(this, BlockMeter);

    return _possibleConstructorReturn(this, (BlockMeter.__proto__ || Object.getPrototypeOf(BlockMeter)).apply(this, arguments));
  }

  _createClass(BlockMeter, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          size = _props.size,
          value = _props.value,
          backgroundColor = _props.backgroundColor,
          foregroundColor = _props.foregroundColor,
          textStyle = _props.textStyle,
          direction = _props.direction,
          className = _props.className,
          style = _props.style;


      var baseTextStyle = {
        fontSize: size / 2.5,
        fontWeight: 'bold',
        fill: this.props.textColor,
        fontFamily: 'sans-serif'
      };

      var middle = size / 2;
      var viewBox = '0 0 ' + size + ' ' + size;
      var fillSize = value * size / 100;

      var textStyleOveride = Object.assign({}, baseTextStyle, textStyle);

      var progressBar = _react2.default.createElement('line', { x1: 0, y1: middle, x2: fillSize, y2: middle, style: { stroke: foregroundColor }, strokeWidth: size });
      if (direction === 'vertical') progressBar = _react2.default.createElement('line', {
        x1: middle,
        y1: size,
        x2: middle,
        y2: size - fillSize,
        style: { stroke: foregroundColor },
        strokeWidth: size
      });

      return _react2.default.createElement(
        'svg',
        { width: size, height: size, viewBox: viewBox, className: className, style: style },
        _react2.default.createElement('line', { x1: 0, y1: middle, x2: size, y2: middle, style: { stroke: backgroundColor }, strokeWidth: size }),
        progressBar,
        _react2.default.createElement(
          'text',
          { style: textStyleOveride, x: '50%', y: '50%', dy: '.3em', textAnchor: 'middle' },
          value + '%'
        )
      );
    }
  }]);

  return BlockMeter;
}(_react.Component);

BlockMeter.propTypes = {
  /** A number representing the percentage to fill on the meter. Must be between 0 and 100. */
  value: _propTypes2.default.number.isRequired,
  /** Size in pixels of the meter. */
  size: _propTypes2.default.number,
  /** Background color for the meter graphic. */
  backgroundColor: _propTypes2.default.string,
  /** Foreground color for the meter graphic. */
  foregroundColor: _propTypes2.default.string,
  /** Color of the text object in the meter graphic. */
  textColor: _propTypes2.default.string,
  /** Override the inline styles of the text object using SVG styles. Must be a valid style object. */
  textStyle: _propTypes2.default.object,
  /** Direction for the progress portion of the meter. */
  direction: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  /** Name of a css class that can be applied to the root SVG element of the meter. */
  className: _propTypes2.default.string,
  /** A style object that can be applied to the root SVG element of the meter. */
  style: _propTypes2.default.object
};
BlockMeter.defaultProps = {
  size: 200,
  backgroundColor: '#7FB2F0',
  foregroundColor: '#35478C',
  textColor: '#4E7AC7',
  textStyle: {},
  direction: 'horizontal',
  className: '',
  style: {}
};
exports.default = BlockMeter;