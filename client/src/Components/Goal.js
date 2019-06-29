import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

export default (props) => (
  <div className="col-md-4 container">
    <div className="card goal-card">
      <div className="card-body">
        <ul>
          <Link to={`goals/${props.goalid}`}>
            <h3>{props.name}</h3>
          </Link>
          <p className="card-text">{props.description}</p>
          <p className="card-text text-muted">Created {props.createdOn ? props.createdOn : "Just Now"}</p>
        </ul>
      </div>
    </div>
  </div>

)
