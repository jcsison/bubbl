import React from 'react'

import AddModal from './add-modal'

export default function FAB(props) {
  const [addModal, setAddModal] = React.useState(false)

  return (
    <div>
      <nav className="plus" onClick={() => setAddModal(true)}>
        <i className="fas fa-plus"></i>
      </nav>
      <AddModal
        addModal={addModal}
        setAddModal={setAddModal}
        typeOptions={props.typeOptions}
        updateBubbles={props.updateBubbles}
      />
    </div>
  )
}
