import React from 'react'
import { isMobile } from 'react-device-detect'
import { Popup } from 'semantic-ui-react'

import types from '../../../utils/objects/types.json'

export default function BubbleTooltip(props) {
  const status = props.modified ? 'Modified' : 'Uploaded'

  const statusDate =
    status +
    ': ' +
    props.uploadDate.toLocaleDateString() +
    ' ' +
    props.uploadDate.toLocaleTimeString()

  const tags = 'Tags: ' + props.tags

  const type = 'Type: ' + types[props.type.toLowerCase()].text

  return (
    <Popup
      disabled={isMobile}
      on="hover"
      position="right center"
      size="tiny"
      trigger={props.bubble}
    >
      <Popup.Content>
        {statusDate}
        <br />
        {type}
        <br />
        {tags}
      </Popup.Content>
    </Popup>
  )
}
