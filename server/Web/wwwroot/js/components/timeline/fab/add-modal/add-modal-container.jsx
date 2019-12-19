import React from 'react'

import AddModalView from './add-modal-view.jsx'

import UpdateContents from '../../../../api/update-contents'
import { displayToast } from '../../utils'

export default function AddModalContainer(props) {
  const [field, setField] = React.useState('')

  const handleAdd = () => {
    const bubble = {
      id: null,
      title: '',
      description: field,
      imageUrl: null,
      location: null,
      tags: 'test',
      type: 'text',
      uploadDate: new Date(Date.now()),
      userId: 1
    }

    if (
      (bubble.title === '' || bubble.title == null) &&
      (bubble.description === '' || bubble.description == null)
    ) {
      displayToast('Error', 'Content field cannot be empty!', 'error')
    } else {
      setField('')

      UpdateContents.addContent(bubble)
        .then(props.updateBubbles)
        .then(() => displayToast('Success', 'Bubble added.', 'success'))
        .catch(() =>
          displayToast(
            'Error',
            'An error occured while adding bubble.',
            'error'
          )
        )
    }

    props.setAddModal(false)
  }

  const handleChangeField = event => {
    setField(event.target.value)
  }

  const handleCancel = () => {
    props.setAddModal(false)
  }

  return (
    <AddModalView
      setAddModal={props.setAddModal}
      addModal={props.addModal}
      handleAdd={handleAdd}
      handleCancel={handleCancel}
      handleChangeField={handleChangeField}
    />
  )
}
