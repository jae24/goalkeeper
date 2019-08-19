import React from 'react';
import axios from 'axios';
import uuid from 'uuid';
import Error from './Error';
import { connect } from 'react-redux';
import { editGoal } from '../../Actions/Goal';
import { withRouter } from 'react-router-dom';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import '../../stylesheets/Goals.scss';

const mapDispatchToProps = (dispatch) => ({
  editGoal: () => dispatch(editGoal()),
});

class EditGoalForm extends React.Component {
  // CLASS PROPERTIES CAN BE SET DIRECTLY WITHOUT A CONSTRUCTOR
  state = {
      _id: this.props.goal._id,
      creatorName: this.props.goal.creatorName,
      creatorPhoneNumber: this.props.goal.creatorPhoneNumber,
      goalTitle: this.props.goal.goalTitle,
      goalDescription: this.props.goal.goalDescription,
      dailyAction:this.props.goal.dailyAction,
      noteToSelf: this.props.goal.noteToSelf,
      createdOn: Date.now(),
      startDate: null,
      endDate: null
  }

  // ARROW FUNCTIONS DIRECTLY BIND TO THE CLASS IT IS NAMED IN
  handleFormSubmission = (e) => {
    e.preventDefault();

    const updateGoal = {
      _id: this.state._id,
      creatorName: this.state.creatorName,
      creatorPhoneNumber: this.state.creatorPhoneNumber,
      goalTitle: this.state.goalTitle,
      goalDescription: this.state.goalDescription,
      dailyAction: this.state.dailyAction,
      createdOn: this.state.createdOn,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    }

    axios.put(`http://localhost:5000/api/goal/${updateGoal._id}`, {
      ...updateGoal
    }).then((res)=>{
      if(res.data.error){
      }
      else {
        window.location = `/goals/${updateGoal._id}`;
      }
    })
  }

  handleNoteToSelfChange = (e) => {
    this.setState({
      noteToSelf: e.target.value
    })
  }

  handleDailyActionChange = (e) => {
    this.setState({
      dailyAction: e.target.value
    })
  }

  handleNoteToSelfChange = (e) => {
    this.setState({
      noteToSelf: e.target.value
    })
  }

  handleCreatorNameChange = (e) => {
    this.setState({
      creatorName: e.target.value
    })
  }

  handleCreatorPhoneNumberChange = (e) => {
    this.setState({
      creatorPhoneNumber: e.target.value
    })
  }

  handleGoalTitleChange = (e) => {
    this.setState({
      goalTitle: e.target.value
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
            <label className="goal-page-header">Edit Name</label>
            <input className="form-control" required={false} type="text" value={this.state.creatorName} onChange={this.handleCreatorNameChange}/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label className="goal-page-header">Edit Phone Number</label>
            <input className="form-control" required={false} type="text" value={this.state.creatorPhoneNumber} onChange={this.handleCreatorPhoneNumberChange}/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label className="goal-page-header">Edit Goal Title</label>
            <input className="form-control" required={false} type="text" value={this.state.goalTitle} maxLength="20" onChange={this.handleGoalTitleChange}/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label className="goal-page-header">Edit Your Daily Commitment</label>
            <input className="form-control" required={false} type="text" value={this.state.dailyAction} onChange={this.handleDailyActionChange}/>
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
      <Error/>
      <input className="submit-btn" style={ {cursor: 'pointer', padding: '10px' }} type="submit"/>
      </form>
      </div>
    )
  }
}

export default withRouter(connect(null, mapDispatchToProps)(EditGoalForm));
