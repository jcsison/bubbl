import React from 'react'

export default function FAB(props) {
  return (
    <nav className="plus dropup" data-toggle="dropdown">
      <i className="fas fa-plus"></i>
      <div className="dropdown-menu">
        <button className="dropdown-item" type="button">
          Add Bubble
        </button>
      </div>
    </nav>
  )
}
/*
  onClick={() =>
    props.setSelectList(
      props.selectList
        .slice(-1, props.selectList.length)
        .concat(props.selectList.slice(0, -1))
    )
  }
*/
