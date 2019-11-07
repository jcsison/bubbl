import React from 'react'

export default function Bubble(props) {
  const [content, setContent] = React.useState(props)

  return (
    <div
      className={['bubble', content.type.toLowerCase()].join(' ')}
      data-toggle="tooltip"
      data-placement="right"
      data-original-title={['Uploaded: ', content.uploadDate].join(' ')}
    >
      <a href={['/Content/Detail/', content.contentid].join('')}>
        {content.imageUrl != null && (
          <div
            className={['image-container', content.type.toLowerCase()].join(
              ' '
            )}
          >
            <img src={content.imageUrl} />
          </div>
        )}
      </a>
      <div className={['text-container', content.type.toLowerCase()].join(' ')}>
        <p>{content.description}</p>
      </div>
    </div>
  )
}
