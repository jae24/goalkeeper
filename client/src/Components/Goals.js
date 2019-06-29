import React from 'react';
import Goal from './Goal';
import GoalForm from './GoalForm'
import { connect } from 'react-redux';

// Maps/Binds the state of this class-based component to the
// portion of the state that is managed by the goal reducer.
// So props contains whatever this function returns.
const mapStateToProps = (state) => {
  return {
    goals: state.goals
  };
};

class Goals extends React.Component {

componentDidUpdate(){
  console.log("Goals List was updated.");
  console.log(this.props.goals);
}

render (){
  return (
    <div>
    <GoalForm />
    <div className="jumbotron goal-post">
      <div className="row">
        {
          this.props.goals.map((goal, index)=>
          (
            <Goal
              key={index}
              goalid={goal._id}
              hoursPerDay={goal.hoursPerDay}
              daysLeft={goal.daysLeft}
              completion={goal.completion}
              name={goal.name}
              description={goal.description}
              createdOn={goal.createdOn}
              />
          )
         )
       }
      </div>
    </div>
    </div>
    )
  }
}

// Connects this component to the Store contained in index.js
export default connect(mapStateToProps)(Goals);
