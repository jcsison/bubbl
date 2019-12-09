import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

import { imageCheck, locationCheck } from './utils'

export default function BubbleMenu(props) {
  return (
    <Popup
      context={props.bubbleRef}
      onClose={() => props.setBubblePopup(false)}
      open={props.bubblePopup}
      position="left center"
    >
      <Popup.Content>
        <Button.Group basic compact fluid size="tiny" vertical>
          {locationCheck(props.location) && (
            <Button href={props.location} target="_blank">
              View Link
            </Button>
          )}
          {imageCheck(props.imageUrl) && (
            <Button href={props.imageUrl} target="_blank">
              View Image
            </Button>
          )}
          <Button
            onClick={() => {
              props.setBubblePopup(false)
              props.setEditModal(true)
            }}
          >
            Edit Bubble
          </Button>
        </Button.Group>
      </Popup.Content>
    </Popup>
  )
}
