import React from 'react'

import BubbleMenu from './bubble-menu'
import BubbleTooltip from './bubble-tooltip'
import ConfirmModal from './confirm-modal'
import EditModal from './edit-modal'

const BubbleView = props => (
  <div className={['bubble', props.content.type.toLowerCase()].join(' ')}>
    <BubbleTooltip
      bubble={props.bubble}
      modified={props.modified}
      tags={props.content.tags}
      type={props.content.type}
      uploadDate={props.content.uploadDate}
    />
    <BubbleMenu
      bubblePopup={props.bubblePopup}
      bubbleRef={props.bubbleRef}
      imageUrl={props.content.imageUrl}
      location={props.content.location}
      setBubblePopup={props.setBubblePopup}
      setEditModal={props.setEditModal}
    />
    <EditModal
      content={props.content}
      editModal={props.editModal}
      modified={props.modified}
      setConfirmModal={props.setConfirmModal}
      setContent={props.setContent}
      setEditModal={props.setEditModal}
      setModified={props.setModified}
      type={props.content.type.toLowerCase()}
      typeOptions={props.typeOptions}
      updateBubbles={props.updateBubbles}
    />
    <ConfirmModal
      confirmModal={props.confirmModal}
      content={props.content}
      setConfirmModal={props.setConfirmModal}
      updateBubbles={props.updateBubbles}
    />
  </div>
)

export default BubbleView
