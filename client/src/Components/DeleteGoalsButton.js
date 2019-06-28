import React from 'react';
import { connect } from 'react-redux';
import { deleteGoals } from '../Actions/Goal'

const mapDispatchToProps = (dispatch) => ({
  deleteAll: () => dispatch(deleteGoals()),
});

class DeleteGoalsButton extends React.Component {

  onButtonClick = () => {
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

export default connect(null, mapDispatchToProps)(DeleteGoalsButton);
