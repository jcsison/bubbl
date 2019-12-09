import React from 'react'
import { Button, Form, Modal } from 'semantic-ui-react'

import UpdateContents from '../../../../../api/update-contents'
import { displayToast } from '../../../utils'

export default function EditModal(props) {
  const handleCancel = () => {
    props.setEditModal(false)
  }

  const handleDelete = () => {
    props.setConfirmModal(true)
  }

  const handleSave = () => {
    UpdateContents.deleteContent(props.content)
      .then(UpdateContents.editContent(props.content))
      .then(props.updateBubbles)
      .then(() => displayToast('Success', 'Bubble updated.', 'success'))
      .catch(() =>
        displayToast(
          'Error',
          'An error occured while updating bubble.',
          'error'
        )
      )

    props.setEditModal(false)
  }

  return (
    <div>
      <Modal onClose={() => props.setEditModal(false)} open={props.editModal}>
        <Modal.Header>Edit Bubble</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Select
                defaultValue={props.content.type}
                fluid
                label="Type"
                options={props.typeOptions}
              />
              <Form.Input
                fluid
                label="Title"
                defaultValue={props.content.title}
              />
              <Form.TextArea
                defaultValue={props.content.description}
                label="Description"
              />
              <Form.Input
                defaultValue={props.content.location}
                fluid
                label="URL"
              />
              <Form.Input
                defaultValue={props.content.tags}
                fluid
                label="Tags (seperated by spaces)"
              />
              <Button onClick={handleSave} primary>
                Save
              </Button>
              <Button onClick={handleCancel} secondary>
                Cancel
              </Button>
              <Button floated="right" onClick={handleDelete} negative>
                Delete
              </Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  )
}
