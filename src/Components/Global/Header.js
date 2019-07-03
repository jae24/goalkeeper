import React from 'react';
import { Link } from 'react-router-dom'
import '../../stylesheets/Header.scss'

export default (props) => (
  <div>
    <nav className="navbar main-nav">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span className="navbar-logo">
          Goaly
        </span>
      </Link>
      <div className="link-wrapper">
        <Link className="navbar-links" to="/goals">Demo</Link>
        <Link className="navbar-links" to="/">Home</Link>
      </div>
    </nav>
  </div>
)
