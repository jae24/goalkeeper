import React from 'react';
import { connect } from 'react-redux';
import { deleteGoals } from '../Actions/Goal'
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch) => ({
  deleteAll: () => dispatch(deleteGoals()),
});

class DeleteGoalsButton extends React.Component {

  onButtonClick = () => {
    this.deleteAllGoals().then(this.props.history.push('/goals'));
  }

  deleteAllGoals = async () => {
    this.props.deleteAll();
  }

  render (){
    return (
      <div>
        <button onClick={this.onButtonClick}>Delete All</button>
      </div>
      )
    }

}

export default withRouter(connect(null, mapDispatchToProps)(DeleteGoalsButton));
