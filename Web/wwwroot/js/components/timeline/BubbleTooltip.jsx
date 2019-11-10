import React from 'react'
import { Popup } from 'semantic-ui-react'

export default function BubbleTooltip(props) {
  return (
    <Popup
      on="hover"
      position="right center"
      size="tiny"
      trigger={props.bubble}
    >
      <Popup.Content>
        Uploaded: {props.uploadDate.toDateString()}
        <br />
        Tags: {props.tags}
      </Popup.Content>
    </Popup>
  )
}
