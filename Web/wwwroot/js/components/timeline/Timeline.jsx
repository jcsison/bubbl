import React from 'react'

import Bubble from './Bubble.jsx'
import FAB from './FAB.jsx'

export default function Timeline(props) {
  const data = Object.keys(props.data).map(i => props.data[i])[0]

  const [selectList, setSelectList] = React.useState(
    data.map(content => content.id)
  )

  const bubbleNodes = data.map(content => {
    return (
      <Bubble
        key={content.id}
        contentid={content.id}
        uploadDate={content.uploadDate}
        type={content.type}
        location={content.location}
        description={content.description}
        imageUrl={content.imageUrl}
      />
    )
  })

  const selectedNodes = selectList.map(id => bubbleNodes[id - 1])

  return (
    <div className="timeline">
      <div className="bubble-containter">
        <div className="bubble-list">{selectedNodes}</div>
      </div>
      <FAB selectList={selectList} setSelectList={setSelectList} />
    </div>
  )
}
