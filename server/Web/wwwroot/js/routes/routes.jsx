import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Catalog from '../components/catalog'
import Timeline from '../components/timeline'

export default function Routes(props) {
  return (
    <BrowserRouter>
      <div className="page-content">
        <Switch>
          <Route component={Timeline} exact path="/" />
          <Route component={Catalog} exact path="/catalog" />
          <Route component={Timeline} exact path="/timeline" />
          <Route render={() => <p>404</p>} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
