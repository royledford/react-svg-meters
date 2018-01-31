import React, { Component } from 'react'
import GithubCorner from 'react-github-corner'
import Header from './Header'
import Docs from './Docs'
import Demo from './Demo'
import Navigation from './Navigation'

import componentData from '../../config/componentData'

import './Home.css'

export default class Meters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showingPage: 'Demo >',
      navShowing: false,
    }
    this.handleNavigationClick = this.handleNavigationClick.bind(this)
  }

  componentDidMount() {
    const id = setInterval(this.randomize, 1000)
    this.setState({ intervalId: id })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  handleNavigationClick(e) {
    e.preventDefault()
    const newTarget = e.target.innerText
    this.setState({
      showingPage: newTarget,
      navShowing: false,
    })
  }

  toggleNav = () => {
    this.setState({ navShowing: !this.state.navShowing })
  }

  render() {
    const { showingPage, navShowing } = this.state
    let showPage = showingPage === 'Demo >' ? <Demo /> : <Docs />
    let showComponents = showingPage === 'Docs >'

    return (
      <div className="home--wrap">
        <Header showNav={this.toggleNav} />
        <Navigation
          components={componentData.map(component => component.name)}
          closeNav={this.toggleNav}
          handleNavigationClick={this.handleNavigationClick}
          show={navShowing}
          showComponents={showComponents}
        />
        {showPage}
        <GithubCorner href="https://github.com/royledford/react-svg-meters" bannerColor="#c9283e" octoColor="#540032" />
      </div>
    )
  }
}
