import React from 'react'

export default function Bubble(props) {
  const [content, setContent] = React.useState(props)

  return (
    <div
      className={['bubble', content.type.toLowerCase()].join(' ')}
      data-html="true"
      data-original-title={[
        ['Uploaded:', content.uploadDate.toDateString()].join(' '),
        ['Tags:', content.tags].join(' ')
      ].join('<br>')}
      data-placement="right"
      data-toggle="tooltip"
    >
      <div
        className="bubble-contents"
        data-content={[
          "<a className='nav-link' href=",
          content.location,
          ">View Link</a><br><a className='nav-link' href=",
          content.imageUrl,
          ">View Image</a><br><a className='nav-link'>Edit Bubble</a>"
        ].join('')}
        data-placement="left"
        data-toggle="popover"
        data-trigger="focus"
        role="button"
        tabIndex="0"
      >
        {content.imageUrl != null && (
          <div
            className={['image-container', content.type.toLowerCase()].join(
              ' '
            )}
          >
            <img src={content.imageUrl} />
          </div>
        )}
        <div
          className={['text-container', content.type.toLowerCase()].join(' ')}
        >
          <p>{content.description}</p>
        </div>
      </div>
    </div>
  )
}
