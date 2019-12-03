import React from 'react'
import { Button, Dropdown, Header, Modal } from 'semantic-ui-react'

import UpdateContents from '../../api/UpdateContents.js'

export default function AddModal(props) {
  return (
    <Modal onClose={() => props.setAddModal(false)} open={props.addModal}>
      <Modal.Header>Add Bubble</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>Bubble Type</Header>
          <Dropdown
            fluid
            options={props.typeOptions}
            placeholder="Type"
            selection
          />
          <br />
          <Button
            onClick={() => {
              props.setAddModal(false)
              addBubble(props.updateBubbles)
            }}
            primary
          >
            Save Changes
          </Button>
          <Button onClick={() => props.setAddModal(false)} secondary>
            Cancel
          </Button>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

function addBubble(updateBubbles) {
  const bubble = {
    id: null,
    title: 'test',
    description: new Date(Date.now()).toISOString(),
    imageUrl: null,
    location: null,
    tags: 'test',
    type: 'Text',
    uploadDate: Date.now(),
    userId: 1
  }

  UpdateContents.addContent(bubble).then(() => updateBubbles())
}
