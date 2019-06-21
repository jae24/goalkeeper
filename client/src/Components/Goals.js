import React from 'react';
import Goal from './Goal';

export default ({goals}) => (
  <div className="row jumbotron">
    {goals.map((goal, index)=>(
      <Goal
        key={index}
        hoursPerDay={goal.hoursPerDay}
        daysLeft={goal.daysLeft}
        completion={goal.completion}
        name={goal.name}
        description={goal.description}/>
      )
    )}
  </div>
)
