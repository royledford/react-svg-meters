import React from 'react'
import Navigation from './Navigation'
import ComponentPage from './ComponentPage'
import componentData from '../../config/componentData'
import Header from './Header'
import GithubCorner from 'react-github-corner'
import './Docs.css'

export default class Docs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      route: window.location.hash.substr(1),
      navShowing: false,
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: window.location.hash.substr(1) })
    })
  }

  toggleNav = () => {
    this.setState({ navShowing: !this.state.navShowing })
  }

  render() {
    const { route, navShowing } = this.state
    const component = route ? componentData.filter(component => component.name === route)[0] : componentData[0]
    return (
      <section className="docs">
        <Header showNav={this.toggleNav} />
        <Navigation
          components={componentData.map(component => component.name)}
          closeNav={this.toggleNav}
          show={navShowing}
        />
        <div className="docs--content">
          <ComponentPage component={component} />
        </div>
        <GithubCorner href="https://github.com/royledford/react-svg-meters" bannerColor="#c9283e" octoColor="#540032" />
      </section>
    )
  }
}
