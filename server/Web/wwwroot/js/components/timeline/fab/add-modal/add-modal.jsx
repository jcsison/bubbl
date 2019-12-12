import React from 'react'
import { Button, Dropdown, Header, Modal } from 'semantic-ui-react'

import UpdateContents from '../../../../api/update-contents'
import { displayToast } from '../../utils'

export default function AddModal(props) {
  const handleAdd = () => {
    const bubble = {
      id: null,
      title: 'test',
      description: new Date(Date.now()).toISOString(),
      imageUrl: null,
      location: null,
      tags: 'test',
      type: 'text',
      uploadDate: new Date(Date.now()),
      userId: 1
    }

    UpdateContents.addContent(bubble)
      .then(props.updateBubbles)
      .then(() => displayToast('Success', 'Bubble added.', 'success'))
      .catch(() =>
        displayToast('Error', 'An error occured while adding bubble.', 'error')
      )

    props.setAddModal(false)
  }

  const handleCancel = () => {
    props.setAddModal(false)
  }

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
          <Button onClick={handleAdd} primary>
            Save Changes
          </Button>
          <Button onClick={handleCancel} secondary>
            Cancel
          </Button>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}
