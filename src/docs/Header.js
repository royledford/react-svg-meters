import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HamburgerIcon from './icons/HamburgerIcon'

import './Header.css'

export default class Header extends Component {
  static propTypes = {
    showNav: PropTypes.func.isRequired,
  }
  render() {
    const { showNav } = this.props
    return (
      <header className="header">
        <HamburgerIcon
          label="Show menu"
          className="header--nav-icon"
          color="#f0433a"
          hoverStyle={{ cursor: 'pointer' }}
          onClick={showNav}
        />
        <h1 className="header--title">React-svg-meters</h1>
      </header>
    )
  }
}
