import React from 'react'

export default function FAB(props) {
  return (
    <nav
      className="plus"
      onClick={() =>
        props.setSelectList(
          props.selectList
            .slice(-1, props.selectList.length)
            .concat(props.selectList.slice(0, -1))
        )
      }
    >
      <i className="fas fa-plus"></i>
    </nav>
  )
}
