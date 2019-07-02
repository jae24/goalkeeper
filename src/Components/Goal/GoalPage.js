import React from 'react';
import { api_url } from '../../API/api';
import axios from 'axios';
import '../../stylesheets/Goals.scss';

class GoalPage extends React.Component{
  state = {}


  componentDidMount() {
    this.fetchItemInfo();
  }

  componentDidUpdate() {
    console.log("UPDATED COMPONENT");
  }

  fetchItemInfo = () => {
    const goalID = this.props.match.params.id;
    axios
      .get(`${ api_url }/goals/${goalID}`)
      .then((res)=> {
        this.setState({
          ...res.data.goal
        });
    })
  }

  getCreationDate = () => {
    let differenceInDays =  Math.floor((Date.now() - this.state.createdOn)/ (1000*60*60*24));
    if(differenceInDays <= 1){
      return 'Created Yesterday';
    } else {
      let daysAgo = Math.floor(differenceInDays);
      return `Created ${daysAgo} days ago`;
    }
  }

  render() {
    return (
      <div className="page">
        <div className="goal-page-details container row">
        <div className="col-md-6">
          <h2 style={{textTransform : 'uppercase'}}>{this.state.goalTitle ? this.state.goalTitle : null}</h2>
          <h3>{this.state.description ? this.state.description : null}</h3>
          <p>{this.state.goalTitle ? this.getCreationDate() : null}</p>
          <div className="row">
            <div className="col-md-2">
              <button className="toolbelt-btn-create" style={{marginBottom: '15px'}}>Metrics</button>
              <button className="toolbelt-btn-create" style={{marginBottom: '15px'}}>Edit</button>
              <button className="toolbelt-btn" style={{marginBottom: '15px'}}>Delete</button>
            </div>
            <div className="col-md-10">
            </div>
          </div>
        </div>
        <div className="col-md-6 red-bg" style={{backgroundColor: 'red'}}>
        </div>
        </div>
      </div>
    );
  }
}


export default GoalPage;
