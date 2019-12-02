import React from 'react'

import Bubble from './Bubble.jsx'
import BubbleContainer from './BubbleContainer.jsx'
import FAB from './FAB.jsx'
import FloatMenu from './FloatMenu.jsx'

import UpdateContents from '../../api/UpdateContents.js'

import types from '../../objects/types.json'

export default function Timeline(props) {
  const [contents, setContents] = React.useState()

  const [fullSelectList, setFullSelectList] = React.useState()

  const [selectList, setSelectList] = React.useState()

  const bubbleNodes = new Map()

  const descMap = new Map()

  const tagsSet = new Set()

  const typeOptions = []

  const typesSet = new Set()

  const updateBubbles = async () => {
    const bubbles = await UpdateContents.getContents()

    bubbles.sort((a, b) => (a.uploadDate < b.uploadDate ? 1 : -1))

    const bubbleList = bubbles ? bubbles.map(content => content.id) : null

    setContents(bubbles)

    setFullSelectList(bubbleList)

    setSelectList(bubbleList)
  }

  Object.keys(types).forEach(type =>
    typeOptions.push({ key: type, text: types[type].text, value: type })
  )

  if (contents) {
    contents.forEach(content => {
      const splitTags = Array.from(new Set(content.tags.split(' '))).sort()

      splitTags.map(tag => tagsSet.add(tag))

      typesSet.add(content.type)

      if (content.description !== null) {
        descMap.set(content.description.toLowerCase(), content.id)
      }

      if (content.title !== null) {
        descMap.set(content.title.toLowerCase(), content.id)
      }

      bubbleNodes.set(
        content.id,
        <Bubble
          contentid={content.id}
          description={content.description}
          imageUrl={content.imageUrl}
          key={content.id}
          location={content.location}
          tags={splitTags.join(' ')}
          title={content.title}
          type={content.type}
          typeOptions={typeOptions}
          uploadDate={new Date(content.uploadDate)}
        />
      )
    })
  }

  React.useEffect(() => {
    const fetchData = () => updateBubbles()

    fetchData()
  }, [])

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
        updateBubbles={updateBubbles}
      />
    </div>
  )
}
