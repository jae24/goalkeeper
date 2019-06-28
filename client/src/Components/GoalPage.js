import React from 'react';
import { api_url } from '../API/api';
import axios from 'axios';

class GoalPage extends React.Component{
  state = {}

  componentWillMount(){
    this.fetchItemInfo();
  }

  fetchItemInfo = () =>{
    const goalID = this.props.match.params.id;
    axios
      .get(`${ api_url }/goals/${goalID}`)
      .then((res)=> {
        this.setState({
          ...res.data.goal
        });
    })
  }

  render() {
    return (
      <div>
        <h1>Goal Page</h1>
        <ul>
          <li>{this.state.name}</li>
          <li>{this.state.description}</li>
        </ul>
      </div>
    );
  }
}


export default GoalPage;
