import React from 'react'
import PropTypes from 'prop-types'
import CloseIcon from './icons/CloseIcon'
import './Navigation.css'

export default class Navigation extends React.Component {
  static propTypes = {
    closeNav: PropTypes.func.isRequired,
    components: PropTypes.array.isRequired,
    handleNavigationClick: PropTypes.func.isRequired,
    showComponents: PropTypes.bool.isRequired,
    show: PropTypes.bool.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      activeItem: '',
    }
  }

  componentDidMount() {
    this.setState({ activeItem: this.props.components[0] })
  }

  handleComponentClick = e => {
    this.setState({ activeItem: e.target.text })
    this.props.closeNav()
  }

  render() {
    const { components, closeNav, show, handleNavigationClick, showComponents } = this.props
    const { activeItem } = this.state

    const navDisplay = show ? 'navigation--nav-show' : 'navigation--nav-hide'
    const navBgDisplay = show ? 'navigation--bg-show' : 'navigation-bg-hide'

    const componentList = showComponents
      ? components.map(name => {
          return (
            <a
              key={name}
              href={`#${name}`}
              className={'navigation--link ' + (name === activeItem ? 'navigation--link-active' : '')}
              onClick={e => this.handleComponentClick(e)}>
              {name}
            </a>
          )
        })
      : null

    const navTitle = showComponents ? (
      <h3 className="navigation--title">Components</h3>
    ) : (
      <h3 className="navigation--title">Demo</h3>
    )

    const navLinks = showComponents ? (
      <a href="" className="navigation--link" onClick={handleNavigationClick}>
        Demo &gt;
      </a>
    ) : (
      <a href="" className="navigation--link" onClick={handleNavigationClick}>
        Docs &gt;
      </a>
    )

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
          {navTitle}
          <hr className="navigation--rule" />
          {componentList && componentList}
          <hr className="navigation--rule" />

          {navLinks}
        </nav>
        <div className={`navigation--bg ${navBgDisplay}`} onClick={closeNav} />
      </React.Fragment>
    )
  }
}
