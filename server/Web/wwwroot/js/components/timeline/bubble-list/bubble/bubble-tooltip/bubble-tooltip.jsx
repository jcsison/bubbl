import React from 'react'
import { Popup } from 'semantic-ui-react'

export default function BubbleTooltip(props) {
  const status = props.modified ? 'Modified' : 'Uploaded'

  return (
    <Popup
      on="hover"
      position="right center"
      size="tiny"
      trigger={props.bubble}
    >
      <Popup.Content>
        {status +
          ': ' +
          props.uploadDate.toLocaleDateString() +
          ' ' +
          props.uploadDate.toLocaleTimeString()}
        <br />
        {'Tags: ' + props.tags}
      </Popup.Content>
    </Popup>
  )
}
