import React from 'react'
import { Button, Dropdown, Header, Modal } from 'semantic-ui-react'

export default function FAB(props) {
  const [addModal, setAddModal] = React.useState(false)

  return (
    <div>
      <nav className="plus" onClick={() => setAddModal(true)}>
        <i className="fas fa-plus"></i>
      </nav>
      <Modal onClose={() => setAddModal(false)} open={addModal}>
        <Modal.Header>Add Bubble</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Bubble Type</Header>
            <Dropdown
              fluid
              options={props.typeOptions}
              placeholder="Type"
              selection
            />
            <br />
            <Button onClick={() => setAddModal(false)} primary>
              Save Changes
            </Button>
            <Button onClick={() => setAddModal(false)} secondary>
              Cancel
            </Button>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  )
}
