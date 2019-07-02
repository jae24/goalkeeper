import React from 'react';
import { connect } from 'react-redux';
import { deleteGoalsAsync } from '../../Actions/Goal'
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch) => ({
  deleteAll: () => dispatch(deleteGoalsAsync()),
});

class ButtonToolBelt extends React.Component {

  onCreateButtonClick = () => {
    this.props.history.push('/create')
  }

  onDeleteButtonClick = () => {
    this.deleteAllGoals().then(this.props.history.push('/goals'));
  }

  deleteAllGoals = async () => {
    this.props.deleteAll();
  }

  render (){
    return (
      <div className="page-container">
        <div className="row">
          <button className="toolbelt-btn" onClick={this.onDeleteButtonClick}>Delete All</button>
          <button className="toolbelt-btn-create" onClick={this.onCreateButtonClick}>Create a New Goal</button>
        </div>
      </div>
      )
    }

}

export default withRouter(connect(null, mapDispatchToProps)(ButtonToolBelt));
