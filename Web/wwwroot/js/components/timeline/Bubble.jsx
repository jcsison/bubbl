import React from 'react'

export default function Bubble(props) {
  const [content, setContent] = React.useState(props)

  const menuContents = []

  if (content.location != null) {
    menuContents.push("<a className='nav-link' href=")
    menuContents.push(content.location)
    menuContents.push('>View Link</a><br>')
  }

  if (content.imageUrl != null) {
    menuContents.push("<a className='nav-link' href=")
    menuContents.push(content.imageUrl)
    menuContents.push('>View Image</a><br>')
  }

  menuContents.push("<a className='nav-link'>Edit Bubble</a>")

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
        data-content={menuContents.join('')}
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
