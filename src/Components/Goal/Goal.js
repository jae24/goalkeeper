import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { deleteGoalAsync } from '../../Actions/Goal'
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../stylesheets/Goals.scss';

const mapDispatchToProps = (dispatch, props) => ({
  deleteGoal: (payload) => dispatch(deleteGoalAsync(payload)),
});

class Goal extends React.Component {

  handleDeleteOnClick = () =>{
    this.props.deleteGoal(this.props.goalid);
  }

  render () {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 container goal-card-wrapper">
        <div className="card goal-card">
          <button style={{border: 'none', backgroundColor: 'transparent', height: '100%', width: '50px', cursor: 'pointer'}}onClick={this.handleDeleteOnClick}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h5 className="goal-card-title">{this.props.goalTitle}</h5>
          <div className="container card-details">
            <div className="row">
              <div className="col-md-12">
                <span style={{color: 'white'}}>Created by {this.props.creatorName}</span>
                <br/>
                <Link style={{ display: 'block', textAlign: 'right'}}to={`goals/${this.props.goalid}`}>
                  Details <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Goal);
