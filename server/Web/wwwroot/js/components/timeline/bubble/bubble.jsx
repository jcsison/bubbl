import React from 'react'
import { Divider } from 'semantic-ui-react'
import styled from 'styled-components'

import BubbleMenu from './bubble-menu'
import BubbleTooltip from './bubble-tooltip'
import EditModal from './edit-modal'

import types from '../../../objects/types.json'

export default function Bubble(props) {
  const [bubblePopup, setBubblePopup] = React.useState(false)

  const [content, setContent] = React.useState(props)

  const [editModal, setEditModal] = React.useState(false)

  const ref = React.createRef()

  const TextContainer = ({ className, children }) => (
    <div className={className}>{children}</div>
  )

  const StyledTextContainer = styled(TextContainer)`
    background: ${types[content.type.toLowerCase()].color}
      url('/images/45-degree-fabric-light.png');
    font-family: 'Source Code Pro', monospace;
    font-size: 0.9rem;
    padding: 6px 32px 8px;
    text-align: left;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  `

  const StyledTitle = styled.p`
    font-size: 0.9rem;
    text-align: center;
  `

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
          <img alt="" src={content.imageUrl} />
        </div>
      )}
      {(content.title != null || content.description != null) && (
        <StyledTextContainer>
          {content.title != null && <StyledTitle>{content.title}</StyledTitle>}
          {content.title != null && content.description != null && <Divider />}
          {content.description != null && <div>{content.description}</div>}
        </StyledTextContainer>
      )}
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
        content={content}
        displayToast={props.displayToast}
        editModal={editModal}
        setContent={setContent}
        setEditModal={setEditModal}
        type={content.type.toLowerCase()}
        typeOptions={props.typeOptions}
        updateBubbles={props.updateBubbles}
      />
    </div>
  )
}
