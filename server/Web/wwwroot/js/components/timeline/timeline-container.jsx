import React from 'react'

import TimelineView from './timeline-view.jsx'

import UpdateContents from '../../api/update-contents'

import types from '../../objects/types.json'

export default function TimelineContainer(props) {
  const [addModal, setAddModal] = React.useState(false)

  const [contents, setContents] = React.useState()

  const [fullSelectList, setFullSelectList] = React.useState()

  const [selectList, setSelectList] = React.useState()

  const bubbleNodes = new Map()

  const descMap = new Map()

  const tagMap = new Map()

  const tagsSet = new Set()

  const typeOptions = []

  const typesSet = new Set()

  const updateBubbles = async () => {
    const bubbles = await UpdateContents.getContents()

    bubbles.sort((a, b) => (a.uploadDate < b.uploadDate ? 1 : -1))

    const bubbleList = bubbles ? bubbles.map(content => content.id) : null

    setFullSelectList(bubbleList)

    setSelectList(bubbleList)

    setContents(bubbles)
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

      tagMap.set(
        content.tags.toLowerCase() + ' ' + content.id.toString(),
        content.id
      )

      content.tags = splitTags.join(' ')

      content.uploadDate = new Date(content.uploadDate)

      bubbleNodes.set(content.id, content)
    })

    console.log('info: bubbles rendered')
  }

  React.useEffect(() => {
    UpdateContents.addRedditPosts('birdpics')
      // .then(() => UpdateContents.addRedditPosts('pics'))
      .then(updateBubbles)

    // updateBubbles()
  }, [])

  return (
    <TimelineView
      addModal={addModal}
      bubbleNodes={bubbleNodes}
      descMap={descMap}
      fullSelectList={fullSelectList}
      selectList={selectList}
      setAddModal={setAddModal}
      setSelectList={setSelectList}
      tagMap={tagMap}
      tags={Array.from(tagsSet).sort()}
      typeOptions={typeOptions}
      types={Array.from(typesSet).sort()}
      updateBubbles={updateBubbles}
    />
  )
}
