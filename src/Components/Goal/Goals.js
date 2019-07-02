import React from 'react';
import Goal from './Goal';
import { connect } from 'react-redux';
import ButtonToolBelt from './ButtonToolBelt';
import '../../stylesheets/Goals.scss';

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
    <ButtonToolBelt />
    <div className="jumbotron goal-post">
      <div className="row">
        {
          this.props.goals.map((goal, index)=>
          (
            <Goal
              key={index}
              goalid={goal._id}
              creatorName={goal.creatorName}
              creatorPhoneNumber= {goal.creatorName}
              goalTitle= {goal.goalTitle}
              goalDescription= {goal.goalDescription}
              createdOn= {goal.createdOn}
              startDate= {goal.startDate}
              endDate= {goal.endDate}
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
