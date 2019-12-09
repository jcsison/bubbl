import React from 'react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import Timeline from '../components/timeline'

export default function Route(props) {
  const history = createMemoryHistory()

  return (
    <Router history={history}>
      <div className="page-content">
        <Timeline />
      </div>
    </Router>
  )
}
