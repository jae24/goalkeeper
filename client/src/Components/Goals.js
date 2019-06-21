import React from 'react';
import Goal from './Goal';

export default ({goals}) => (
  <div>
    {goals.map((goal)=>(<Goal name={goal.name} description={goal.description}/>))}
  </div>
)
