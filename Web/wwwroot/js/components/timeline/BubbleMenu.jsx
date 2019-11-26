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
          {locationCheck(props.location) && (
            <Button href={props.location}>View Link</Button>
          )}
          {imageCheck(props.imageUrl) && (
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

function imageCheck(imageUrl) {
  const test = [
    imageUrl != null,
    !/^(\/images\/.*)$/.test(imageUrl),
    !/^(.*\.ytimg.com\/.*)$/.test(imageUrl)
  ]

  return Object.values(test).every(Boolean)
}

function locationCheck(location) {
  const test = [location != null, !/^(\/.*)$/.test(location)]

  return Object.values(test).every(Boolean)
}
