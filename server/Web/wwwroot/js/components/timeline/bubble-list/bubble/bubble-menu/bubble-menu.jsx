import React from 'react'
import { isMobile } from 'react-device-detect'
import { Button, Popup } from 'semantic-ui-react'

import { imageCheck, locationCheck } from './utils'

export default function BubbleMenu(props) {
  const position = isMobile ? 'bottom center' : 'left center'

  const viewImage = imageCheck(props.imageUrl) && (
    <Button href={props.imageUrl} target="_blank">
      View Image
    </Button>
  )

  const viewLink = locationCheck(props.location) && (
    <Button href={props.location} target="_blank">
      View Link
    </Button>
  )

  const handleClose = () => {
    props.setBubblePopup(false)
  }

  const handleEdit = () => {
    props.setBubblePopup(false)
    props.setEditModal(true)
  }

  return (
    <Popup
      context={props.bubbleRef}
      onClose={handleClose}
      open={props.bubblePopup}
      position={position}
    >
      <Popup.Content>
        <Button.Group basic compact fluid size="tiny" vertical>
          {viewImage}
          {viewLink}
          <Button onClick={handleEdit}>Edit Bubble</Button>
        </Button.Group>
      </Popup.Content>
    </Popup>
  )
}
