import React from 'react';
import { Link } from 'react-router-dom'
import '../../stylesheets/Header.scss'
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default (props) => (
  <div>
    <nav className="navbar main-nav">
      <Link to="/">
        <span className="navbar-logo">
          GoalJet<FontAwesomeIcon icon={faPlane} />
        </span>
      </Link>
      <div className="link-wrapper">
        <Link to="/goals">Goals</Link>
        <Link to="/create">Create a Goal</Link>
        <Link to="/">Home</Link>
      </div>
    </nav>
  </div>
)
