import React from 'react';
import GoalTabs from './GoalTabs';
import { api_url } from '../../API/api';
import axios from 'axios';
import '../../stylesheets/Goals.scss';

class GoalPage extends React.Component{
  state = {
    goal: ''
  }

  componentDidMount() {
    this.fetchItemInfo();
  }


  fetchItemInfo = () => {
    const goalID = this.props.match.params.id;
    axios
      .get(`${ api_url }/goals/${goalID}`)
      .then((res)=> {
        this.setState({
          goal: {...res.data.goal}
        });
    })
  }

  getCreationDate = () => {
    let differenceInDays =  Math.floor((Date.now() - this.state.createdOn)/ (1000*60*60*24));
    if(differenceInDays === 0){
      return 'Created Today';
    } else if(differenceInDays === 1){
        return 'Created Yesterday';
    } else {
      let daysAgo = Math.floor(differenceInDays);
      return `Created ${daysAgo} days ago`;
    }
  }

  render() {
    return (
      <div className="page">
        <div className="goal-page-wrapper">
          <GoalTabs goal={this.state.goal}/>
        </div>
      </div>
    );
  }
}


export default GoalPage;
