import React from 'react'
import { Button, Form, Modal } from 'semantic-ui-react'

import UpdateContents from '../../../../../api/update-contents'
import { displayToast } from '../../../utils'

export default function EditModal(props) {
  const [description, setDescription] = React.useState(
    props.content.description
  )

  const [imageUrl, setImageUrl] = React.useState(props.content.imageUrl)

  const [location, setLocation] = React.useState(props.content.location)

  const [tags, setTags] = React.useState(props.content.tags)

  const [title, setTitle] = React.useState(props.content.title)

  const [type, setType] = React.useState(props.content.type)

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

  const handleChangeType = event => {
    setType(event.target.textContent.toLowerCase())
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
      type: type,
      uploadDate: props.content.uploadDate, // todo: check if content is modified before assigning date
      userId: 1
    }

    if (JSON.stringify(content) !== JSON.stringify(props.content)) {
      content.uploadDate = Date.now()
      props.setModified(true)
    }

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
                onChange={handleChangeType}
                options={props.typeOptions}
              />
              <Form.Input
                fluid
                label="Title"
                onChange={handleChangeTitle}
                defaultValue={props.content.title}
              />
              <Form.TextArea
                defaultValue={props.content.description}
                label="Description"
                onChange={handleChangeDescription}
              />
              <Form.Input
                defaultValue={props.content.location}
                fluid
                label="URL"
                onChange={handleChangeLocation}
              />
              <Form.Input
                defaultValue={props.content.imageUrl}
                fluid
                label="Image URL"
                onChange={handleChangeImageUrl}
              />
              <Form.Input
                defaultValue={props.content.tags}
                fluid
                label="Tags (seperated by spaces)"
                onChange={handleChangeTags}
              />
              <Button onClick={handleDelete} negative>
                Delete
              </Button>
              <Button floated="right" onClick={handleSave} primary>
                Save
              </Button>
              <Button floated="right" onClick={handleCancel} secondary>
                Cancel
              </Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  )
}
