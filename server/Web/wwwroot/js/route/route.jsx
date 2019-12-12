import React from 'react'
import { createMemoryHistory } from 'history'
import { Router, Switch } from 'react-router-dom'

import Timeline from '../components/timeline'

export default function Route(props) {
  const history = createMemoryHistory()

  return (
    <Router history={history}>
      <div className="page-content">
        <Timeline />
      </div>
      <Switch>
        <Route exact path="/" component={Timeline} />
      </Switch>
    </Router>
  )
}
