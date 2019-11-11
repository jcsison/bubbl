import React from 'react'

import Bubble from './Bubble.jsx'
import BubbleContainer from './BubbleContainer.jsx'
import FAB from './FAB.jsx'
import FloatMenu from './FloatMenu.jsx'

import types from '../../objects/types.json'

export default function Timeline(props) {
  const typeOptions = []

  Object.keys(types).forEach(function(type) {
    typeOptions.push({ key: type, text: types[type].text, value: type })
  })

  const data = Object.keys(props.data).map(i => props.data[i])[0]

  const fullSelectList = data.map(content => content.id)

  const [selectList, setSelectList] = React.useState(fullSelectList)

  const tagsSet = new Set()

  const typesSet = new Set()

  const descMap = new Map()

  const bubbleNodes = data.map(content => {
    const splitTags = Array.from(new Set(content.tags.split(' '))).sort()

    splitTags.map(tag => tagsSet.add(tag))

    typesSet.add(content.type)

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

  return (
    <div className="timeline">
      <FloatMenu
        descMap={descMap}
        fullSelectList={fullSelectList}
        setSelectList={setSelectList}
        tags={Array.from(tagsSet).sort()}
        types={Array.from(typesSet).sort()}
      />
      <BubbleContainer bubbleNodes={bubbleNodes} selectList={selectList} />
      <FAB
        selectList={selectList}
        setSelectList={setSelectList}
        typeOptions={typeOptions}
      />
    </div>
  )
}
