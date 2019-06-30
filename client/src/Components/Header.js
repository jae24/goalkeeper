import React from 'react';
import { Link } from 'react-router-dom'
import '../stylesheets/Header.scss'

export default (props) => (
  <div>
    <nav className="navbar main-nav">
      <Link to="/"><span className="navbar-logo"> GoalJet > </span></Link>
      <div className="link-wrapper">
        <Link to="/goals">Goals</Link>
        <Link to="/about">About</Link>
        <Link to="/create">Create a Goal</Link>
        <Link to="/">Home</Link>
      </div>
    </nav>
  </div>
)
