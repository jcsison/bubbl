import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

import UpdateContents from '../../../../../api/update-contents'
import { displayToast } from '../../../utils'

export default function ConfirmModal(props) {
  const handleNo = () => {
    props.setConfirmModal(false)
  }

  const handleYes = () => {
    UpdateContents.deleteContent(props.content)
      .then(props.updateBubbles)
      .then(() => displayToast('Success', 'Bubble deleted.', 'success'))
      .catch(() =>
        displayToast(
          'Error',
          'An error occured while deleting bubble.',
          'error'
        )
      )

    props.setConfirmModal(false)
  }

  return (
    <Modal
      basic
      onClose={() => props.setConfirmModal(false)}
      open={props.confirmModal}
      size="small"
    >
      <Header content="Delete" icon="delete" />
      <Modal.Content>
        <p>Are you sure you want to delete this bubble?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="green" inverted onClick={handleNo}>
          <Icon name="remove" /> No
        </Button>
        <Button color="red" inverted onClick={handleYes}>
          <Icon name="remove" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}
