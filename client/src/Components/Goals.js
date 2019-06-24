import React from 'react';
import Goal from './Goal';
import { connect } from 'react-redux';
import { createGoal } from '../Actions/Goal';

// Maps/Binds the state of this class-based component to the
// portion of the state that is managed by the goal reducer.
// So props contains whatever this function returns.
const mapStateToProps = (state) => {
  return {
    goals: state.goals
  };
};

class Goals extends React.Component {

//Props contains the object created in the function above (mapStateToProps)
// We set the GOAL value within the state object of this cbc
state = {
  goal: this.props
}

// Pulls data from database
componentWillMount(){
  console.log("Loading shit from the database");
}

// Checks to see that goals re loaded correctly
componentDidMount(){
  console.log("Loaded goals: ", this.state.goals);
}

// Same shit
componentDidUpdate(){
  console.log("some shit came here", this.props.goals);
}

render (){
  return (
    <div className="row jumbotron goal-post">
      {
        this.props.goals.map((goal, index)=>
        (
        <Goal
          key={index}
          hoursPerDay={goal.hoursPerDay}
          daysLeft={goal.daysLeft}
          completion={goal.completion}
          name={goal.name}
          description={goal.description}
        />
        )
      )
      }
    </div>
    )
  }
}

// Connects this component to the Store contained in index.js
export default connect(mapStateToProps)(Goals);
