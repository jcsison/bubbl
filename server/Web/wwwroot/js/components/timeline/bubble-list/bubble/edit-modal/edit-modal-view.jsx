import React from 'react'
import { Button, Form, Modal } from 'semantic-ui-react'

export default function EditModalView(props) {
  return (
    <Modal
      onClose={() => props.setEditModal(false)}
      open={props.editModal}
      size="tiny"
    >
      <Modal.Header>Edit Bubble</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form onSubmit={props.handleSave}>
            <Form.Input
              fluid
              label="Title"
              onChange={props.handleChangeTitle}
              defaultValue={props.content.title}
            />
            <Form.TextArea
              defaultValue={props.content.description}
              label="Description"
              onChange={props.handleChangeDescription}
            />
            <Form.Input
              defaultValue={props.content.location}
              fluid
              label="URL"
              onChange={props.handleChangeLocation}
            />
            <Form.Input
              defaultValue={props.content.imageUrl}
              fluid
              label="Image URL"
              onChange={props.handleChangeImageUrl}
            />
            <Form.Input
              defaultValue={props.content.tags}
              fluid
              label="Tags (seperated by spaces)"
              onChange={props.handleChangeTags}
            />
            <Button onClick={props.handleDelete} negative type="reset">
              Delete
            </Button>
            <Button floated="right" primary type="submit">
              Save
            </Button>
            <Button floated="right" onClick={props.handleCancel} secondary>
              Cancel
            </Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}
