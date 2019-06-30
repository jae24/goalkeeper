import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { createGoal } from '../Actions/Goal';
import { Redirect, withRouter } from 'react-router-dom';
import uuid from 'uuid';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

// Using the react-redux library,
// We give this component a dispatch function within its props.
// This function takes a goal parameter and dispatches it to createGoal in actions/goal
const mapDispatchToProps = (dispatch, props) => ({
  createGoal: (payload) => dispatch(createGoal(payload)),
});

class GoalForm extends React.Component {
  // CLASS PROPERTIES CAN NOW BE SET DIRECTLY WITHOUT A CONSTRUCTOR
  state = {
      id: uuid(),
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
      id: this.state.id,
      name: this.state.name,
      description: this.state.description,
      createdOn: this.state.createdOn,
      startDate: this.state.startDate._d,
      endDate: this.state.endDate._d
    }

    this.props.createGoal(newGoal);

    axios.post('http://localhost:3001/api/create', {
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
    console.log(e.target.value);
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
            <textarea className="form-control" required={true} type="textArea" value={this.state.description} onChange={this.handleDescriptionChange}/>
          </div>
        </div>
      <div className="form-group">
        <DateRangePicker
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })} />
      </div>
      <input className="btn-success" style={ {cursor: 'pointer', padding: '10px' }} type="submit"/>
      </form>
      </div>
    )
  }
}

export default withRouter(connect(null, mapDispatchToProps)(GoalForm));
