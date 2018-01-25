import React from 'react'
import PropTypes from 'prop-types'
import CloseIcon from './icons/CloseIcon'
import './Navigation.css'

export default class Navigation extends React.Component {
  static propTypes = {
    closeNav: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      activeItem: '',
    }
  }

  handleComponentClick = e => {
    this.setState({ activeItem: e.target.text })
    this.props.closeNav()
  }

  render() {
    const { components, closeNav, show } = this.props
    const { activeItem } = this.state

    const navDisplay = show ? 'navigation--nav-show' : 'navigation--nav-hide'
    const navBgDisplay = show ? 'navigation--bg-show' : 'navigation-bg-hide'
    debugger
    return (
      <React.Fragment>
        <nav className={`navigation--nav ${navDisplay}`}>
          <CloseIcon
            label="Close Menu"
            className="navigation--button-close"
            size={22}
            hoverStyle={{ cursor: 'pointer' }}
            onClick={closeNav}
          />
          <h3 className="navigation--title">Components</h3>
          {components.map(name => {
            return (
              <a
                key={name}
                href={`#${name}`}
                className={'navigation--link ' + (name === activeItem ? 'navigation--link-active' : '')}
                onClick={e => this.handleComponentClick(e)}>
                {name}
              </a>
            )
          })}
        </nav>
        <div className={`navigation--bg ${navBgDisplay}`} onClick={closeNav} />
      </React.Fragment>
    )
  }
}

// Navigation.propTypes = {
//   components: PropTypes.array.isRequired,
// }
