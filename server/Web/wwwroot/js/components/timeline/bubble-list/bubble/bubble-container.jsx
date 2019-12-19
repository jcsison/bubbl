import React from 'react'
import { Divider } from 'semantic-ui-react'
import styled from 'styled-components'

import BubbleView from './bubble-view.jsx'

import types from '../../utils/objects/types.json'

export default function BubbleContainer(props) {
  const [bubblePopup, setBubblePopup] = React.useState(false)

  const [confirmModal, setConfirmModal] = React.useState(false)

  const [content, setContent] = React.useState(props.content)

  const [editModal, setEditModal] = React.useState(false)

  const [modified, setModified] = React.useState(false)

  const imageContainer = content.imageUrl != null && (
    <div className={['image-container', content.type.toLowerCase()].join(' ')}>
      <img alt="" src={content.imageUrl} />
    </div>
  )

  const ref = React.createRef()

  const TextContainer = ({ className, children }) => (
    <div className={className}>{children}</div>
  )

  const StyledTextContainer = styled(TextContainer)`
    background: ${types[content.type.toLowerCase()].color}
      url('/images/45-degree-fabric-light.png');
  `

  const bubble = (
    <div
      className="bubble-contents"
      onClick={() => setBubblePopup(true)}
      ref={ref}
    >
      {imageContainer}
      {((content.title != null && content.title !== '') ||
        (content.description != null && content.description !== '')) && (
        <StyledTextContainer className="text-container">
          {content.title != null && content.title !== '' && (
            <div className="title">{content.title}</div>
          )}
          {content.title != null &&
            content.title !== '' &&
            content.description != null &&
            content.description !== '' && <Divider />}
          {content.description != null && content.description !== '' && (
            <div>{content.description}</div>
          )}
        </StyledTextContainer>
      )}
    </div>
  )

  return (
    <BubbleView
      bubble={bubble}
      bubblePopup={bubblePopup}
      bubbleRef={ref}
      confirmModal={confirmModal}
      content={content}
      editModal={editModal}
      modified={modified}
      setBubblePopup={setBubblePopup}
      setConfirmModal={setConfirmModal}
      setContent={setContent}
      setEditModal={setEditModal}
      setModified={setModified}
      typeOptions={props.typeOptions}
      updateBubbles={props.updateBubbles}
    />
  )
}
