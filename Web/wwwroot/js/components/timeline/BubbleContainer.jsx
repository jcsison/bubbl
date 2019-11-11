import React from 'react'

export default function BubbleContainer(props) {
  const selectedNodes = props.selectList.map(id => props.bubbleNodes[id - 1])

  return (
    <div className="bubble-container">
      <div className="bubble-list">{selectedNodes}</div>
    </div>
  )
}
