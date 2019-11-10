import React from 'react'
import { Dropdown, Input, Menu, Popup } from 'semantic-ui-react'

export default function FloatMenu(props) {
  const tagOptions = []

  props.tags.map(tag =>
    tagOptions.push({
      key: tag,
      text: tag,
      value: tag
    })
  )

  const typeOptions = []

  props.types.map(type =>
    typeOptions.push({
      key: type,
      text: type,
      value: type
    })
  )

  const [searchPattern, setSearchPattern] = React.useState('')

  return (
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
              onChange={event =>
                handleSearch(
                  event.target.value.toLowerCase(),
                  props.descMap,
                  props.fullSelectList,
                  setSearchPattern,
                  props.setSelectList
                )
              }
              placeholder="Search bubbles..."
              value={searchPattern}
            />
          </Menu.Item>
          <Menu.Item>
            <Dropdown
              button
              className="icon"
              fluid
              icon="filter"
              labeled
              multiple
              search
              options={tagOptions}
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
              options={typeOptions}
              selection
              placeholder="Filter by Type"
            />
          </Menu.Item>
        </Menu>
      </Popup.Content>
    </Popup>
  )
}

function handleSearch(
  searchPattern,
  descMap,
  fullSelectList,
  setSearchPattern,
  setSelectList
) {
  const searchSelectList = []

  descMap.forEach((key, value) => {
    if (fuzzyMatch(searchPattern, value)) {
      searchSelectList.push(key)
    }
  })

  if (searchPattern != '') {
    setSelectList(searchSelectList)
  } else {
    setSelectList(fullSelectList)
  }

  setSearchPattern(searchPattern)

  console.log(searchSelectList)
}

function fuzzyMatch(pattern, str) {
  pattern = '.*' + pattern.split('').join('.*') + '.*'
  const re = new RegExp(pattern)
  return re.test(str)
}
