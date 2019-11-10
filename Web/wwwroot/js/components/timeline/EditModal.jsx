import React from 'react'
import { Button, Dropdown, Header, Modal } from 'semantic-ui-react'

export default function EditModal(props) {
  return (
    <Modal onClose={() => props.setEditModal(false)} open={props.editModal}>
      <Modal.Header>Edit Bubble</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>Bubble Type</Header>
          <Dropdown
            defaultValue={props.type}
            fluid
            options={props.typeOptions}
            selection
          />
          <br />
          <Button onClick={() => props.setEditModal(false)} primary>
            Save Changes
          </Button>
          <Button onClick={() => props.setEditModal(false)} secondary>
            Cancel
          </Button>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}
