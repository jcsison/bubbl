import React from 'react'
import LazyLoad from 'react-lazyload'
import { SemanticToastContainer, toast } from 'react-semantic-toasts'

import Bubble from './bubble'
import BubbleContainer from './bubble-container'
import FAB from './fab'
import FloatMenu from './float-menu'

import UpdateContents from '../../api/update-contents'

import types from '../../objects/types.json'

export default function Timeline(props) {
  const [contents, setContents] = React.useState()

  const [fullSelectList, setFullSelectList] = React.useState()

  const [selectList, setSelectList] = React.useState()

  const bubbleNodes = new Map()

  const descMap = new Map()

  const tagMap = new Map()

  const tagsSet = new Set()

  const typeOptions = []

  const typesSet = new Set()

  const displayToast = (title, description, type) => {
    toast({
      title: title,
      description: <p>{description}</p>,
      type: type,
      time: 5000
    })
  }

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

      bubbleNodes.set(
        content.id,
        <LazyLoad key={content.id} height={400}>
          <Bubble
            contentid={content.id}
            description={content.description}
            displayToast={displayToast}
            imageUrl={content.imageUrl}
            key={content.id}
            location={content.location}
            tags={splitTags.join(' ')}
            title={content.title}
            type={content.type}
            typeOptions={typeOptions}
            updateBubbles={updateBubbles}
            uploadDate={new Date(content.uploadDate)}
          />
        </LazyLoad>
      )
    })

    console.log('info: bubbles rendered')
  }

  React.useEffect(() => {
    UpdateContents.addRedditPosts('pic')
      // .then(() => UpdateContents.addRedditPosts('earthporn'))
      // .then(() => UpdateContents.addRedditPosts('spaceporn'))
      .then(updateBubbles)

    // updateBubbles()
  }, [])

  return (
    <div className="timeline">
      <FloatMenu
        descMap={descMap}
        fullSelectList={fullSelectList}
        setSelectList={setSelectList}
        tagMap={tagMap}
        tags={Array.from(tagsSet).sort()}
        types={Array.from(typesSet).sort()}
      />
      <BubbleContainer bubbleNodes={bubbleNodes} selectList={selectList} />
      <FAB
        displayToast={displayToast}
        selectList={selectList}
        setSelectList={setSelectList}
        typeOptions={typeOptions}
        updateBubbles={updateBubbles}
      />
      <SemanticToastContainer className="toast" />
    </div>
  )
}
