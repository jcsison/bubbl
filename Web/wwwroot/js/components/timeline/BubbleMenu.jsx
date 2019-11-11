import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

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
          {props.location != null && (
            <Button href={props.location}>View Link</Button>
          )}
          {props.imageUrl != null &&
            !/^(\/images\/.*)$/.test(props.imageUrl) && (
              <Button href={props.imageUrl}>View Image</Button>
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
