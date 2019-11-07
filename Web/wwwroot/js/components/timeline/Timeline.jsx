import React from 'react'

import Bubble from './Bubble.jsx'
import FAB from './FAB.jsx'
import Menu from './Menu.jsx'

export default function Timeline(props) {
  const data = Object.keys(props.data).map(i => props.data[i])[0]

  const [selectList, setSelectList] = React.useState(
    data.map(content => content.id)
  )

  const tags = new Set()

  const bubbleNodes = data.map(content => {
    content.tags.split(' ').map(tag => tags.add(tag))

    return (
      <Bubble
        contentid={content.id}
        description={content.description}
        imageUrl={content.imageUrl}
        key={content.id}
        location={content.location}
        tags={content.tags}
        type={content.type}
        uploadDate={new Date(content.uploadDate)}
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
      <Menu tags={tags} />
    </div>
  )
}
