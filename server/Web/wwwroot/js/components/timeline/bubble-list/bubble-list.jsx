import React from 'react'
import LazyLoad from 'react-lazyload'

import Bubble from './bubble'

export default function BubbleList(props) {
  const selectedNodes =
    props.selectList != null && props.bubbleNodes.size > 0
      ? props.selectList.map(id => {
          const content = props.bubbleNodes.get(id)

          return (
            <LazyLoad key={content.id} height={200}>
              <Bubble
                content={content}
                key={content.id}
                typeOptions={props.typeOptions}
                updateBubbles={props.updateBubbles}
              />
            </LazyLoad>
          )
        })
      : null

  return (
    <div className="bubble-container">
      <div className="bubble-list">{selectedNodes}</div>
    </div>
  )
}
