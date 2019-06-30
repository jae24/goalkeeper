import React from 'react';
import { connect } from 'react-redux';
import { deleteGoalsAsync } from '../Actions/Goal'
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch) => ({
  deleteAll: () => dispatch(deleteGoalsAsync()),
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
      <div className="page-container">
        <div className="delete-goal-btn-wrapper">
          <button className="delete-goal-btn" onClick={this.onButtonClick}>Delete All</button>
        </div>
      </div>
      )
    }

}

export default withRouter(connect(null, mapDispatchToProps)(DeleteGoalsButton));
