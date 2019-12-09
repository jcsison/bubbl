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
                contentid={content.id}
                description={content.description}
                imageUrl={content.imageUrl}
                key={content.id}
                location={content.location}
                tags={content.tags}
                title={content.title}
                type={content.type}
                typeOptions={props.typeOptions}
                updateBubbles={props.updateBubbles}
                uploadDate={content.uploadDate}
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
