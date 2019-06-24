import React from 'react';
import Goal from './Goal';

class Goals extends React.Component {

state = {
  goals: this.props.goals
}

componentDidMount(){
  console.log(this.state);
}

render (){
  return (
    <div className="row jumbotron">
      {
        this.state.goals.map((goal, index)=>(
        <Goal
          key={index}
          hoursPerDay={goal.hoursPerDay}
          daysLeft={goal.daysLeft}
          completion={goal.completion}
          name={goal.name}
          description={goal.description}/>
        ))
      }
    </div>
    )
  }
}

export default Goals;
