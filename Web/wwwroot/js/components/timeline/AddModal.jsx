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

              const bubble = {
                title: 'test',
                description: 'test',
                imageUrl: null,
                location: null,
                tags: 'test',
                type: 'Text',
                uploadDate: '2019-10-07',
                userId: 1
              }

              UpdateContents.addBubble(bubble)
                .then(() => UpdateContents.getBubbles())
                .then(data => props.setBubbles(data))
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
