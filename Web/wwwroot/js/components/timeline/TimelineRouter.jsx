import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import UpdateContents from '../../api/UpdateContents.js'

import Timeline from './Timeline.jsx'

export default function TimelineRouter(props) {
  const history = createMemoryHistory()

  return (
    <Router history={history}>
      <Timeline />
    </Router>
  )
}
