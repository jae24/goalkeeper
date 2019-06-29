import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { createGoal } from '../Actions/Goal';
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
      daysLeft: 10,
      completion: 100,
      createdOn: Date.now()
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

    console.log(typeof newGoal.startDate);

    axios.post('http://localhost:3001/api/create', {
      ...newGoal
    })

    this.setState({
      id: uuid(),
      name: '',
      description: '',
      createdOn: Date.now()
    })
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
        <div className="form-wrapper">
          <form className="goal-form" onSubmit={this.handleFormSubmission}>
            <input required={true} type="text" value={this.state.name} placeholder="name" onChange={this.handleNameChange}/>
            <input required={true} type="text" value={this.state.description} placeholder="description" onChange={this.handleDescriptionChange}/>
            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />
            <input className="btn-success" type="submit"/>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(GoalForm);
