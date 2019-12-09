import React from 'react'

import BubbleMenu from './bubble-menu'
import BubbleTooltip from './bubble-tooltip'
import EditModal from './edit-modal'

const BubbleView = props => (
  <div className={['bubble', props.content.type.toLowerCase()].join(' ')}>
    <BubbleTooltip
      bubble={props.bubble}
      tags={props.content.tags}
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
      setContent={props.setContent}
      setEditModal={props.setEditModal}
      type={props.content.type.toLowerCase()}
      typeOptions={props.typeOptions}
      updateBubbles={props.updateBubbles}
    />
  </div>
)

export default BubbleView
