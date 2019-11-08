import React from 'react'

import Bubble from './Bubble.jsx'
import FAB from './FAB.jsx'
import Menu from './Menu.jsx'

export default function Timeline(props) {
  const typeOptions = [
    {
      key: 'file',
      text: 'File',
      value: 'file'
    },
    {
      key: 'link',
      text: 'Link',
      value: 'link'
    },
    {
      key: 'text',
      text: 'Text',
      value: 'text'
    },
    {
      key: 'image',
      text: 'Image',
      value: 'image'
    },
    {
      key: 'video',
      text: 'Video',
      value: 'video'
    },
    {
      key: 'audio',
      text: 'Audio',
      value: 'audio'
    },
    {
      key: 'youtube',
      text: 'YouTube',
      value: 'youtube'
    }
  ]

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
        typeOptions={typeOptions}
      />
    )
  })

  const selectedNodes = selectList.map(id => bubbleNodes[id - 1])

  return (
    <div className="timeline">
      <Menu tags={tags} />
      <div className="bubble-containter">
        <div className="bubble-list">{selectedNodes}</div>
      </div>
      <FAB
        selectList={selectList}
        setSelectList={setSelectList}
        typeOptions={typeOptions}
      />
    </div>
  )
}
