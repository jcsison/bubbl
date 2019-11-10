import React from 'react'
import { Button, Dropdown, Header, Modal, Popup } from 'semantic-ui-react'

import BubbleMenu from './BubbleMenu.jsx'
import BubbleTooltip from './BubbleTooltip.jsx'
import EditModal from './EditModal.jsx'

export default function Bubble(props) {
  const [content, setContent] = React.useState(props)

  const [bubblePopup, setBubblePopup] = React.useState(false)

  const [editModal, setEditModal] = React.useState(false)

  const ref = React.createRef()

  const bubble = (
    <div
      className="bubble-contents"
      onClick={() => setBubblePopup(true)}
      ref={ref}
    >
      {content.imageUrl != null && (
        <div
          className={['image-container', content.type.toLowerCase()].join(' ')}
        >
          <img src={content.imageUrl} />
        </div>
      )}
      <div className={['text-container', content.type.toLowerCase()].join(' ')}>
        <p>{content.description}</p>
      </div>
    </div>
  )

  return (
    <div className={['bubble', content.type.toLowerCase()].join(' ')}>
      <BubbleTooltip
        bubble={bubble}
        tags={content.tags}
        uploadDate={content.uploadDate}
      />
      <BubbleMenu
        bubblePopup={bubblePopup}
        bubbleRef={ref}
        imageUrl={content.imageUrl}
        location={content.location}
        setBubblePopup={setBubblePopup}
        setEditModal={setEditModal}
      />
      <EditModal
        editModal={editModal}
        setEditModal={setEditModal}
        type={content.type.toLowerCase()}
        typeOptions={props.typeOptions}
      />
    </div>
  )
}
