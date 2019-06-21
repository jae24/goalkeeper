import React from 'react';
import axios from 'axios';

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

    axios.post('http://localhost:3001/api/create', {
      ...this.state
    })

    this.setState({
      name: '',
      description: ''
    })
  }

  handleNameChange = (e) => {
    console.log(e.target.value);
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

export default GoalForm;
