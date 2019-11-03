import React from 'react'

export default function Timeline(props) {
  return (
    <BubbleList data={Object.keys(props.data).map(i => props.data[i])[0]} />
  )
}

function BubbleList(props) {
  const [selectList, setSelectList] = React.useState(
    props.data.map(content => content.id)
  )

  const bubbleNodes = props.data.map(content => {
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
    <div className="bubble-containter">
      <div className="bubble-list">{selectedNodes}</div>
    </div>
  )
}

function Bubble(props) {
  const [contentid, setContentid] = React.useState(props.contentid)
  const [description, setDescription] = React.useState(props.description)
  const [imageUrl, setImageUrl] = React.useState(props.imageUrl)
  const [type, setType] = React.useState(props.type)
  const [uploadDate, setUploadDate] = React.useState(props.uploadDate)

  return (
    <div
      className={['bubble', type.toLowerCase()].join(' ')}
      data-toggle="tooltip"
      data-placement="right"
      data-original-title={['Uploaded: ', uploadDate].join(' ')}
    >
      <a href={['/Content/Detail/', contentid].join('')}>
        {imageUrl != null && (
          <div className={['image-container', type.toLowerCase()].join(' ')}>
            <img src={imageUrl} />
          </div>
        )}
      </a>
      <div className={['text-container', type.toLowerCase()].join(' ')}>
        <p>{description}</p>
      </div>
    </div>
  )
}

function TestButton() {
  // todo: test setSelectList()
}
