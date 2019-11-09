import React from 'react'
import { Button, Dropdown, Header, Modal, Popup } from 'semantic-ui-react'

export default function Bubble(props) {
  const [content, setContent] = React.useState(props)

  const [bubblePopup, setBubblePopup] = React.useState(false)

  const [editModal, setEditModal] = React.useState(false)

  const ref = React.createRef()

  return (
    <div>
      <Popup
        inverted
        on="hover"
        position="right center"
        size="tiny"
        trigger={
          <div className={['bubble', content.type.toLowerCase()].join(' ')}>
            <div
              className="bubble-contents"
              onClick={() => setBubblePopup(true)}
              ref={ref}
            >
              {content.imageUrl != null && (
                <div
                  className={[
                    'image-container',
                    content.type.toLowerCase()
                  ].join(' ')}
                >
                  <img src={content.imageUrl} />
                </div>
              )}
              <div
                className={['text-container', content.type.toLowerCase()].join(
                  ' '
                )}
              >
                <p>{content.description}</p>
              </div>
            </div>
          </div>
        }
      >
        <Popup.Content>
          Uploaded: {content.uploadDate.toDateString()}
          <br />
          Tags: {content.tags}
        </Popup.Content>
      </Popup>
      <Popup
        context={ref}
        inverted
        onClose={() => setBubblePopup(false)}
        open={bubblePopup}
        position="left center"
      >
        <Popup.Content>
          {content.location != null && (
            <div>
              <a className="nav-link" href={content.location}>
                View Link
              </a>
              <br />
            </div>
          )}
          {content.imageUrl != null && (
            <div>
              <a className="nav-link" href={content.imageUrl}>
                View Image
              </a>
              <br />
            </div>
          )}
          <a
            className="nav-link"
            href="#"
            onClick={() => {
              setBubblePopup(false)
              setEditModal(true)
            }}
          >
            Edit Bubble
          </a>
        </Popup.Content>
      </Popup>
      <Modal onClose={() => setEditModal(false)} open={editModal}>
        <Modal.Header>Edit Bubble</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Bubble Type</Header>
            <Dropdown
              defaultValue={content.type.toLowerCase()}
              fluid
              options={props.typeOptions}
              selection
            />
            <br />
            <Button onClick={() => setEditModal(false)} primary>
              Save Changes
            </Button>
            <Button onClick={() => setEditModal(false)} secondary>
              Cancel
            </Button>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  )
}
