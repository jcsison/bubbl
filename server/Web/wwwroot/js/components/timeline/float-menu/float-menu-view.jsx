import React from 'react'
import { Input, Menu, Popup } from 'semantic-ui-react'

const FloatMenuView = props => (
  <Popup
    on="click"
    trigger={
      <nav className="bars">
        <i className="fas fa-bars"></i>
      </nav>
    }
  >
    <Popup.Content>
      <Menu vertical>
        <Menu.Item>
          <Input
            icon="search"
            onChange={event => props.handleChange(event)}
            onKeyDown={event => props.handleKeyDown(event)}
            placeholder="Search bubbles..."
          />
        </Menu.Item>
        {/*
        <Menu.Item>
          <Dropdown
            button
            className="icon"
            fluid
            icon="filter"
            labeled
            multiple
            search
            options={props.tagOptions}
            selection
            placeholder="Filter by Tag"
          />
          <br />
          <Dropdown
            button
            className="icon"
            clearable
            fluid
            icon="filter"
            labeled
            search
            options={props.typeOptions}
            selection
            placeholder="Filter by Type"
          />
        </Menu.Item>
        */}
      </Menu>
    </Popup.Content>
  </Popup>
)

export default FloatMenuView
