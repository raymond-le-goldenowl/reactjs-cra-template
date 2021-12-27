import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { _routes } from './Router'
export default function NavLinks() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={'/'}>
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {Object.values(_routes).map((route, index) => {
                return (
                  <li key={index} className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to={route.path}
                    >
                      {route?.title}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
