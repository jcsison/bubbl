import React from 'react'

import Bubble from './Bubble.jsx'
import FAB from './FAB.jsx'
import FloatMenu from './FloatMenu.jsx'

import options from '../../objects/options.json'

export default function Timeline(props) {
  const typeOptions = options.typeOptions

  const data = Object.keys(props.data).map(i => props.data[i])[0]

  const fullSelectList = data.map(content => content.id)

  const [selectList, setSelectList] = React.useState(fullSelectList)

  const tags = new Set()

  const types = new Set()

  const descMap = new Map()

  const bubbleNodes = data.map(content => {
    let splitTags = Array.from(new Set(content.tags.split(' '))).sort()

    splitTags.map(tag => tags.add(tag))

    types.add(content.type)

    descMap.set(content.description.toLowerCase(), content.id)

    return (
      <Bubble
        contentid={content.id}
        description={content.description}
        imageUrl={content.imageUrl}
        key={content.id}
        location={content.location}
        tags={splitTags.join(' ')}
        type={content.type}
        typeOptions={typeOptions}
        uploadDate={new Date(content.uploadDate)}
      />
    )
  })

  const selectedNodes = selectList.map(id => bubbleNodes[id - 1])

  return (
    <div className="timeline">
      <FloatMenu
        descMap={descMap}
        fullSelectList={fullSelectList}
        setSelectList={setSelectList}
        tags={Array.from(tags).sort()}
        types={Array.from(types).sort()}
      />
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
