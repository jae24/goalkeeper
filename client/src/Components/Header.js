import React from 'react';
import DeleteGoalsButton from './DeleteGoalsButton';
import { Link } from 'react-router-dom'

export default (props) => (
  <div>
    <nav className="navbar main-nav">
      <h2 className="navbar-logo">Accountabl.</h2>
      <div className="link-wrapper">
        <Link to="/goals">Goals</Link>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </div>
    </nav>
  </div>
)
