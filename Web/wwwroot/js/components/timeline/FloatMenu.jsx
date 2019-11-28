import React from 'react'
import { Dropdown, Input, Menu, Popup } from 'semantic-ui-react'

export default function FloatMenu(props) {
  const tagOptions = []

  const timer = [0]

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

  const [searchWait, setSearchWait] = React.useState(false)

  const handleChange = event => {
    setSearchPattern(event.target.value.toLowerCase())

    clearTimeout(timer[0])

    timer[0] = setTimeout(() => setSearchWait(true), 2000)

    if (searchWait) setSearchWait(false)
  }

  React.useEffect(() => {
    if (searchWait) {
      console.log(searchPattern)

      handleSearch(
        props.descMap,
        props.fullSelectList,
        searchPattern,
        setSearchPattern,
        props.setSelectList
      )
    }
  }, [searchWait])

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
              onChange={event => handleChange(event)}
              placeholder="Search bubbles..."
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
  descMap,
  fullSelectList,
  searchPattern,
  setSearchPattern,
  setSelectList
) {
  const searchSelectSet = new Set()

  descMap.forEach((key, value) => {
    if (fuzzyMatch(searchPattern, value)) {
      searchSelectSet.add(key)
    }
  })

  const searchSelectList = Array.from(searchSelectSet)

  setSelectList(searchPattern !== '' ? searchSelectList : fullSelectList)

  console.log(searchSelectList)
}

function fuzzyMatch(pattern, str) {
  pattern = '.*' + pattern.split('').join('.*') + '.*'
  return new RegExp(pattern).test(str)
}
