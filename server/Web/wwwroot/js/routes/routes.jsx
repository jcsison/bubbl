import React from 'react'
import { createMemoryHistory } from 'history'
import { Redirect, Route, Router, Switch } from 'react-router-dom'

import Timeline from '../components/timeline'

export default function Routes(props) {
  const history = createMemoryHistory()

  console.log('help')

  return (
    <Router history={history}>
      <div className="page-content">
        <Switch>
          <Route exact path="/">
            <Redirect to="/timeline" />
          </Route>
          <Route component={Timeline} path="/timeline" />
        </Switch>
      </div>
    </Router>
  )
}
