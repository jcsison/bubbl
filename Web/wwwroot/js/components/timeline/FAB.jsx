import React from 'react'
import { Button, Dropdown, Header, Modal } from 'semantic-ui-react'

import AddModal from './AddModal.jsx'

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
