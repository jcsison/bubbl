import React from 'react'

export default function BubbleContainer(props) {
  const selectedNodes = props.selectList.map(id => props.bubbleNodes.get(id))

  return (
    <div className="bubble-container">
      <div className="bubble-list">{selectedNodes}</div>
    </div>
  )
}
