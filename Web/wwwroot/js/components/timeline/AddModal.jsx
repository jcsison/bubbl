import React from 'react'
import { Button, Dropdown, Header, Modal } from 'semantic-ui-react'

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
          <Button onClick={() => props.setAddModal(false)} primary>
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
