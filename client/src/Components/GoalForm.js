import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { createGoal } from '../Actions/Goal';

// Using the react-redux library,
// We give this component a dispatch function within its props.
// This function takes a goal parameter and dispatches it to createGoal in actions/goal
const mapDispatchToProps = (dispatch, props) => ({
  createGoal: (payload) => dispatch(createGoal(payload)),
});

class GoalForm extends React.Component {
  // CLASS PROPERTIES CAN NOW BE SET DIRECTLY WITHOUT A CONSTRUCTOR
  state = {
      name: '',
      description: '',
      daysLeft: 10,
      completion: 100
  }

  // ARROW FUNCTIONS DIRECTLY BIND TO THE CLASS IT IS NAMED IN
  handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(e.target);

    const newGoal = {
      name: this.state.name,
      description: this.state.description
    }

    this.props.createGoal(newGoal);

    axios.post('http://localhost:3001/api/create', {
      ...this.state
    })

    this.setState({
      name: '',
      description: ''
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
        <form onSubmit={this.handleFormSubmission}>
          <input required={true} type="text" value={this.state.name} placeholder="name" onChange={this.handleNameChange}></input>
          <input required={true} type="text" value={this.state.description} placeholder="description" onChange={this.handleDescriptionChange}></input>
          <input className="btn-success" type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(GoalForm);
