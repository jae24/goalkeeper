import React from 'react';
import DeleteGoalsButton from './DeleteGoalsButton';
import { Link } from 'react-router-dom'

export default (props) => (
  <div>
    <nav className="navbar navbar-dark bg-dark">
      <h2 className="navbar-logo">Accountabl.</h2>
      <Link to="/">
        Home
      </Link>
      <Link to="/goals">
        Goals
      </Link>
      <Link to="/about">
        About
      </Link>
      <DeleteGoalsButton />
    </nav>
  </div>
)
