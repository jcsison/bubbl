import React from 'react'
import { Button, Dropdown, Header, Modal } from 'semantic-ui-react'

import UpdateContents from '../../../../api/update-contents'

export default function EditModal(props) {
  const handleCancel = () => {
    props.setEditModal(false)
  }

  const handleDelete = () => {
    UpdateContents.deleteContent(props.content)
      .then(props.updateBubbles)
      .then(() => props.displayToast('Success', 'Bubble deleted.', 'success'))
      .catch(() =>
        props.displayToast(
          'Error',
          'An error occured while deleting bubble.',
          'error'
        )
      )

    props.setEditModal(false)
  }

  const handleSave = () => {
    props.setEditModal(false)
  }

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
          <Button onClick={handleSave} primary>
            Save Changes
          </Button>
          <Button onClick={handleCancel} secondary>
            Cancel
          </Button>
          <Button floated="right" onClick={handleDelete} negative>
            Delete
          </Button>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}
