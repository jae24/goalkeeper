import React from 'react';
import '../App.css'

export default (props) => (
  <div className="col-md-4 container">
    <div className="card">
      <div className="card-body goal-card">
        <ul>
          <h3>{props.name}</h3>
          <p className="card-text">{props.description}</p>
          <p className="card-text">Hours Per Day: {props.hoursPerDay}</p>
          <p className="card-text text-muted">{props.daysLeft} Days Remaining</p>
          <p className="card-text text-muted">{props.completion}% Completed</p>
        </ul>
      </div>
    </div>
  </div>

)
