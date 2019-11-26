import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import Timeline from './Timeline.jsx'

export default function TimelineRouter(props) {
  const history = createMemoryHistory()

  const data = Object.keys(props.data).map(i => props.data[i])[0]

  return (
    <Router history={history}>
      <Timeline data={data} />
    </Router>
  )
}
