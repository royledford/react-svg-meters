import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CloseIcon extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
    className: PropTypes.string,
    hoverStyle: PropTypes.object,
    onClick: PropTypes.func,
  }
  static defaultProps = {
    size: 16,
    color: '#000',
    className: '',
    hoverStyle: {},
    onClick: () => {},
  }

  constructor(props) {
    super(props)
    this.state = {
      hovered: false,
    }
    this.toggleHovered = this.toggleHovered.bind(this)
  }

  toggleHovered() {
    this.setState({ hovered: !this.state.hovered })
  }

  render() {
    const blockStyle = { display: 'inline-block' }
    const style = { ...this.props.hoverStyle, ...blockStyle }

    const { size, label, color, className, onClick } = this.props
    return (
      <div
        className={className}
        style={style}
        onMouseEnter={this.toggleHovered}
        onMouseLeave={this.toggleHovered}
        onClick={onClick}>
        <svg width={size} height={size} viewBox="0 0 38 38" aria-labelledby={label}>
          <title>{label}</title>
          <polygon
            stroke={color}
            points="38 18.94 19.52 0 16.17 3.43 28.98 16.55 0 16.55 0 21.42 28.98 21.42 16.17 34.57 19.52 38 38 19.06 37.93 18.99 38 18.94"
          />
        </svg>
      </div>
    )
  }
}
