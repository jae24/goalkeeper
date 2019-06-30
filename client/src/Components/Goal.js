import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { deleteGoalAsync } from '../Actions/Goal'
import '../stylesheets/Goals.scss';

const mapDispatchToProps = (dispatch, props) => ({
  deleteGoal: (payload) => dispatch(deleteGoalAsync(payload)),
});


class Goal extends React.Component {

  handleDeleteOnClick = () =>{
    this.props.deleteGoal(this.props.goalid);
  }

  render () {
    return (
      <div className="col-md-3 container goal-card-wrapper">
      <button onClick={this.handleDeleteOnClick}>X</button>
      <Link to={`goals/${this.props.goalid}`}>
        <div className="card goal-card">
          <h5 className="goal-card-title">{this.props.goalTitle}</h5>
          <div className="container card-details">
            <div className="row">
              <div className="col-md-3">
                <img style={{width: '50px', borderRadius: '100px'}}src="https://media.licdn.com/dms/image/C5603AQG0iff30QYr9w/profile-displayphoto-shrink_100_100/0?e=1567641600&v=beta&t=RkP7OiUzxylGW7vjueMFPP5uSIUaqFrx3zIgQ3p8TIo"/>
              </div>
              <div className="col-md-9">
                <span style={{color: 'white'}}>Created by {this.props.creatorName}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Goal);
