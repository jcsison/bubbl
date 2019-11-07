import React from 'react'

export default function Menu(props) {
  return (
    <nav className="bars">
      <div className="dropdown">
        <i className="fas fa-bars" data-toggle="dropdown"></i>
        <div className="dropdown-menu">
          <button className="dropdown-item" type="button">
            Search
          </button>
          <div class="dropdown-divider"></div>
          <button className="dropdown-item" type="button">
            Filter by Tag
          </button>
          <button className="dropdown-item" type="button">
            Filter by Type
          </button>
          <div class="dropdown-divider"></div>
          <button className="dropdown-item" type="button">
            Sort by Name
          </button>
          <button className="dropdown-item" type="button">
            Sort by Date
          </button>
        </div>
      </div>
    </nav>
  )
}
