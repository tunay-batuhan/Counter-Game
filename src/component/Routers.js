import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'





export default class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/Home">Home</Link>
        <Switch>
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    )
  }
}

