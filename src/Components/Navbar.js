import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          < NavLink className="navbar-brand" to="/" >{props.title}</ NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                < NavLink className="nav-link active" aria-current="page" to="/" >Home</ NavLink>
              </li>
              <li className="nav-item mx-2">
                < NavLink className="nav-link" to="/about" >About Us</ NavLink>
              </li>
              <li className="nav-item mx-2">
                < NavLink className="nav-link" to="/pivacypolicy">Privacy Policy</ NavLink>
              </li>
              <li className="nav-item mx-2">
                < NavLink className="nav-link" to="/terms">Terms and Conditions</ NavLink>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}
Navbar.prototype = {
  title: PropTypes.string
}

Navbar.defaultProps = {
  title: "Text Utils"
}
