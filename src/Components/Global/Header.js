import React from 'react';
import { Link } from 'react-router-dom'
import '../../stylesheets/Header.scss'

export default (props) => (
  <div>
    <nav className="navbar main-nav">
      <Link to="/">
        <span className="navbar-logo">
          Goaly
        </span>
      </Link>
      <div className="link-wrapper">
        <Link to="/goals">Demo</Link>
        <Link to="/">Home</Link>
      </div>
    </nav>
  </div>
)
