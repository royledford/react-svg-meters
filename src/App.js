import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './docs/Home'
import Meters from './docs/Meters'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/meters" component={Meters} />
        </Switch>
      </Router>
    )
  }
}

export default App
