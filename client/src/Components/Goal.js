import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Goals.scss';

export default (props) => (
  <div className="col-md-3 container goal-card-wrapper">
  <Link to={`goals/${props.goalid}`}>
    <div className="card goal-card">
      <p><h5 className="goal-card-title">{props.name}</h5></p>
      <div className="container card-details">
      </div>
    </div>
  </Link>
  </div>

)
