import React from 'react'

export default class Data extends React.Component {
  render() {
    return timeline(this.props.data)
  }
}

function timeline(data) {
  const contents = parseContents(data)
  console.log(contents)

  return <div className="bubble-container"></div>
}

function bubbleList(contents) {
  return <div className="bubble-list">{console.log(contents)}</div>
}

function parseContents(data) {
  return Object.keys(data).map(i => data[i])[0]
}
