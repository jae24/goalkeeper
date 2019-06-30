import React from 'react';
import { api_url } from '../API/api';
import axios from 'axios';
import '../stylesheets/Goals.scss';

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
      <div className="page">
        <div className="goal-page-details">
          <h2>{this.state.name}</h2>
          <h3>Notes: {this.state.description}</h3>
          <div className="row">
            <div className="col-md-6">
              <h3>Photos</h3>
              <div className="row">
                <div className="col-md-4">
                  <img src="http://www.lebanoninapicture.com/Prv/Images/Pages/Page_115307/please-don-t-ask-me-who-s-walking-who-lebanon-k-6-5-2017-2-44-36-pm-t.jpg" alt="dog-walking"/>
                </div>
                <div className="col-md-4">
                  <img src="http://www.lebanoninapicture.com/Prv/Images/Pages/Page_115307/please-don-t-ask-me-who-s-walking-who-lebanon-k-6-5-2017-2-44-36-pm-t.jpg" alt="dog-walking"/>
                </div>
                <div className="col-md-4">
                  <img src="http://www.lebanoninapicture.com/Prv/Images/Pages/Page_115307/please-don-t-ask-me-who-s-walking-who-lebanon-k-6-5-2017-2-44-36-pm-t.jpg" alt="dog-walking"/>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h3>Progress</h3>
              <img style={{ width: '500px'}}src="https://apexcharts.com/wp-content/uploads/2018/01/basic-line-chart.svg" alt="chart"/>
            </div>
          </div>
          <div className="row">
            <h3>Hours Per Day: 1</h3>
            <hr/>
            <h3>Days Left: 5</h3>
          </div>
        </div>
      </div>
    );
  }
}


export default GoalPage;
