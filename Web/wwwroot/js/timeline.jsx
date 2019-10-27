class BubbleContainer extends React.Component {
  render () {
    return (
      <div className="bubble-container">
        <BubbleList contents={this.props.contents} />
      </div>
    )
  }
}

class BubbleList extends React.Component {
  render () {
    const array = Object.keys(this.props.contents).map(
      i => this.props.contents[i]
    )

    var bubbleNodes = array[0].map(function (content) {
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

    return <div className="bubble-list">{bubbleNodes}</div>
  }
}

class Bubble extends React.Component {
  render () {
    return (
      <a
        asp-controller="Content"
        asp-action="Detail"
        asp-route-id={this.props.contentid}
      >
        <div className={['bubble', this.props.type.toLowerCase()].join(' ')}>
          {this.props.imageUrl != null && (
            <div
              className={[
                'image-container',
                this.props.type.toLowerCase()
              ].join(' ')}
            >
              <img src={this.props.imageUrl} />
            </div>
          )}
          <div
            className={['text-container', this.props.type.toLowerCase()].join(
              ' '
            )}
          >
            <p>{this.props.description}</p>
            <p>{this.props.uploadDate}</p>
          </div>
        </div>
      </a>
    )
  }
}
