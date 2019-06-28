import React from 'react';
import Goal from './Goal';
import { connect } from 'react-redux';
import { api_url } from '../API/api'

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
          createdOn={goal.createdOn}
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
