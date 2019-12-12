import React from 'react'
import { Button, Form, Modal } from 'semantic-ui-react'

export default function AddModalView(props) {
  return (
    <Modal
      onClose={() => props.setAddModal(false)}
      open={props.addModal}
      size="tiny"
    >
      <Modal.Header>Add Bubble</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.TextArea label="Content" onChange={props.handleChangeField} />
            <Button floated="right" onClick={props.handleAdd} primary>
              Add
            </Button>
            <Button floated="right" onClick={props.handleCancel} secondary>
              Cancel
            </Button>
            <br />
            <br />
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}
