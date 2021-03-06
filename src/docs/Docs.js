import React from 'react'
import ComponentPage from './ComponentPage'
import componentData from '../../config/componentData'
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
    const { route } = this.state
    const component = route ? componentData.filter(component => component.name === route)[0] : componentData[0]
    return (
      <div className="docs">
        <div className="docs--content">
          <ComponentPage component={component} />
        </div>
        <GithubCorner href="https://github.com/royledford/react-svg-meters" bannerColor="#c9283e" octoColor="#540032" />
      </div>
    )
  }
}
