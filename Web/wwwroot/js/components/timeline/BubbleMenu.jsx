import React from 'react'
import { Popup } from 'semantic-ui-react'

export default function BubbleMenu(props) {
  return (
    <Popup
      context={props.bubbleRef}
      onClose={() => props.setBubblePopup(false)}
      open={props.bubblePopup}
      position="left center"
    >
      <Popup.Content>
        {props.location != null && (
          <div>
            <a className="nav-link" href={props.location}>
              View Link
            </a>
            <br />
          </div>
        )}
        {props.imageUrl != null && (
          <div>
            <a className="nav-link" href={props.imageUrl}>
              View Image
            </a>
            <br />
          </div>
        )}
        <a
          className="nav-link"
          href="#"
          onClick={() => {
            props.setBubblePopup(false)
            props.setEditModal(true)
          }}
        >
          Edit Bubble
        </a>
      </Popup.Content>
    </Popup>
  )
}
