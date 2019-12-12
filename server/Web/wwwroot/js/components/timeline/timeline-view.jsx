import React from 'react'
import { SemanticToastContainer } from 'react-semantic-toasts'

import BubbleList from './bubble-list'
import FAB from './fab'
import FloatMenu from './float-menu'

const TimelineView = props => (
  <div className="timeline">
    <FloatMenu
      descMap={props.descMap}
      fullSelectList={props.fullSelectList}
      setSelectList={props.setSelectList}
      tagMap={props.tagMap}
      tags={props.tags}
      types={props.types}
    />
    <BubbleList
      bubbleNodes={props.bubbleNodes}
      selectList={props.selectList}
      typeOptions={props.typeOptions}
      updateBubbles={props.updateBubbles}
    />
    <FAB
      selectList={props.selectList}
      setSelectList={props.setSelectList}
      typeOptions={props.typeOptions}
      updateBubbles={props.updateBubbles}
    />
    <SemanticToastContainer className="toast" />
  </div>
)

export default TimelineView
