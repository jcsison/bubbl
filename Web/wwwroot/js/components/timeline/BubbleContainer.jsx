import React from 'react'

export default function BubbleContainer(props) {
  const selectedNodes =
    props.selectList != null
      ? props.selectList.map(id => props.bubbleNodes.get(id))
      : null

  return (
    <div className="bubble-container">
      <div className="bubble-list">{selectedNodes}</div>
    </div>
  )
}
