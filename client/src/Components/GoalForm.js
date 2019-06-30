import React from 'react';
import axios from 'axios';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { createGoal } from '../Actions/Goal';
import { withRouter } from 'react-router-dom';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import '../stylesheets/Goals.scss';

// Using the react-redux library,
// We give this component a dispatch function within its props.
// This function takes a goal parameter and dispatches it to createGoal in actions/goal
const mapDispatchToProps = (dispatch, props) => ({
  createGoal: (payload) => dispatch(createGoal(payload)),
});

class GoalForm extends React.Component {
  // CLASS PROPERTIES CAN NOW BE SET DIRECTLY WITHOUT A CONSTRUCTOR
  state = {
      _id: '',
      name: '',
      description: '',
      createdOn: Date.now(),
      startDate: null,
      endDate: null
  }

  // ARROW FUNCTIONS DIRECTLY BIND TO THE CLASS IT IS NAMED IN
  handleFormSubmission = (e) => {
    e.preventDefault();

    const newGoal = {
      _id: uuid(),
      name: this.state.name,
      description: this.state.description,
      createdOn: this.state.createdOn,
      startDate: this.state.startDate._d,
      endDate: this.state.endDate._d
    }

    this.props.createGoal(newGoal);

    axios.post('http://localhost:3001/api/goals', {
      ...newGoal
    })

    this.props.history.push('/goals');
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleFormSubmission} id="goal-form">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Name</label>
            <input className="form-control" required={true} type="text" value={this.state.name} onChange={this.handleNameChange}/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Description</label>
            <textarea style={{ height: '200px' }}className="form-control" required={true} type="textArea" value={this.state.description} onChange={this.handleDescriptionChange}/>
          </div>
        </div>
      <div className="form-group">
        <DateRangePicker
          startDate={this.state.startDate}
          startDateId="start_date_id"
          endDate={this.state.endDate}
          endDateId="end_date_id"
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })} />
      </div>
      <input className="submit-btn" style={ {cursor: 'pointer', padding: '10px' }} type="submit"/>
      </form>
      </div>
    )
  }
}

export default withRouter(connect(null, mapDispatchToProps)(GoalForm));
