import React from 'react'

import AddModal from './add-modal'

export default function FAB(props) {
  return (
    <div>
      <nav className="plus" onClick={() => props.setAddModal(true)}>
        <i className="fas fa-plus"></i>
      </nav>
      <AddModal
        addModal={props.addModal}
        setAddModal={props.setAddModal}
        typeOptions={props.typeOptions}
        updateBubbles={props.updateBubbles}
      />
    </div>
  )
}
