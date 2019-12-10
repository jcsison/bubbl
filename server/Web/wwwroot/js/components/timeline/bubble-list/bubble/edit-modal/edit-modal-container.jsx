import React from 'react'

import EditModalView from './edit-modal-view.jsx'

import UpdateContents from '../../../../../api/update-contents'
import { displayToast } from '../../../utils'

export default function EditModalContainer(props) {
  const [description, setDescription] = React.useState(
    props.content.description
  )

  const [imageUrl, setImageUrl] = React.useState(props.content.imageUrl)

  const [location, setLocation] = React.useState(props.content.location)

  const [tags, setTags] = React.useState(props.content.tags)

  const [title, setTitle] = React.useState(props.content.title)

  const handleCancel = () => {
    props.setEditModal(false)
  }

  const handleChangeDescription = event => {
    setDescription(event.target.value)
  }

  const handleChangeImageUrl = event => {
    setImageUrl(event.target.value)
  }

  const handleChangeLocation = event => {
    setLocation(event.target.value)
  }

  const handleChangeTags = event => {
    setTags(event.target.value)
  }

  const handleChangeTitle = event => {
    setTitle(event.target.value)
  }

  const handleDelete = () => {
    props.setConfirmModal(true)
  }

  const handleSave = () => {
    const content = {
      id: props.content.id,
      title: title,
      description: description,
      imageUrl: imageUrl,
      location: location,
      tags: tags,
      type: props.content.type, // todo: dynamically check type
      uploadDate: props.content.uploadDate, // todo: check if content is modified before assigning date
      userId: 1
    }

    if (JSON.stringify(content) !== JSON.stringify(props.content)) {
      content.uploadDate = Date.now()

      props.setModified(true)

      UpdateContents.editContent(content)
        .then(props.updateBubbles)
        .then(() => props.setContent(content))
        .then(() => displayToast('Success', 'Bubble updated.', 'success'))
        .catch(() =>
          displayToast(
            'Error',
            'An error occured while updating bubble.',
            'error'
          )
        )
    } else {
      displayToast('Info', 'No changes were made to the bubble.', 'info')
    }

    props.setEditModal(false)
  }

  return (
    <EditModalView
      content={props.content}
      editModal={props.editModal}
      handleCancel={handleCancel}
      handleChangeDescription={handleChangeDescription}
      handleChangeImageUrl={handleChangeImageUrl}
      handleChangeLocation={handleChangeLocation}
      handleChangeTags={handleChangeTags}
      handleChangeTitle={handleChangeTitle}
      handleDelete={handleDelete}
      handleSave={handleSave}
      setEditModal={props.setEditModal}
    />
  )
}
