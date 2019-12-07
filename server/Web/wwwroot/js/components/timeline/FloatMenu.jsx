import React from 'react'
import { Dropdown, Input, Menu, Popup } from 'semantic-ui-react'

export default function FloatMenu(props) {
  const [searchPattern, setSearchPattern] = React.useState('')

  const [searchWait, setSearchWait] = React.useState(false)

  const descMap = props.descMap

  const fullSelectList = props.fullSelectList

  const setSelectList = props.setSelectList

  const tagOptions = []

  const tagMap = props.tagMap

  let timer = null

  const typeOptions = []

  const delaySearch = (value, delay) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      setSearchPattern(value)
      setSearchWait(true)
    }, delay)
  }

  const handleChange = event =>
    delaySearch(event.target.value.toLowerCase(), 1000)

  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      if (event.target.value === '' && event.target.value !== searchPattern) {
        delaySearch('', 1)
      }
    }
  }

  props.tags.map(tag =>
    tagOptions.push({
      key: tag,
      text: tag,
      value: tag
    })
  )

  props.types.map(type =>
    typeOptions.push({
      key: type,
      text: type,
      value: type
    })
  )

  React.useEffect(() => {
    if (searchWait) {
      const searchSelectSet = new Set()

      descMap.forEach((key, value) => {
        if (fuzzyMatch(searchPattern, value)) {
          searchSelectSet.add(key)
        }
      })

      tagMap.forEach((key, value) => {
        value.split(' ').forEach(tag => {
          if (tag !== key) {
            if (fuzzyMatch(searchPattern, tag)) {
              searchSelectSet.add(key)
            }
          }
        })
      })

      const searchSelectList = Array.from(searchSelectSet)

      setSelectList(searchPattern !== '' ? searchSelectList : fullSelectList)

      setSearchWait(false)

      console.log(searchSelectList)
    }
  }, [descMap, fullSelectList, searchPattern, searchWait, setSelectList, tagMap])

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
              onKeyDown={event => handleKeyDown(event)}
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
          */}
        </Menu>
      </Popup.Content>
    </Popup>
  )
}

function fuzzyMatch(pattern, str) {
  pattern = '.*' + pattern.split('').join('.*') + '.*'
  return new RegExp(pattern).test(str)
}
