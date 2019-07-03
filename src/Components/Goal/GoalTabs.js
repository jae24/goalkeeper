import React from 'react';
import GoalForm from './GoalForm';
import { GoalPieChart, GoalLineChart } from './Metrics';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { dateConverter, calculateDaysRemaining } from './date-helper';
import "react-tabs/style/react-tabs.css";

export default (props) => {
  if(!props.goal){
    return null;
  }
  return (
    <Tabs>
      <TabList>
        <Tab>
          <h3 className="goal-page-header">Details</h3>
        </Tab>
        <Tab>
          <h3 className="goal-page-header">Edit Goal</h3>
        </Tab>
      </TabList>

      <TabPanel>
        <h1 className="goal-page-header">{props.goal.goalTitle}</h1>
        <div className="goal-page-content">
        <span className="goal-page-header">Start Date</span>
        <div className="endDate">{dateConverter(props.goal.startDate)}</div>
        </div>
        <div className="goal-page-content">
          <span className="goal-page-header">End Date</span>
          <div className="endDate">{dateConverter(props.goal.endDate)}</div>
        </div>
        <div className="goal-page-content">
          <span className="goal-page-header">Days Remaining</span>
          <div className="endDate">{calculateDaysRemaining(props.goal.endDate)} Days</div>
        </div>
        <h3 className="goal-page-header">Data</h3>
        <div className="row graph-row">
          <div className="col-md-4">
            <h6>Q: Did you remember to {props.goal.goalTitle}?</h6>
            <GoalPieChart goal={props.goal}/>
          </div>
        </div>
        <div className="row graph-row">
          <div className="col-md-4">
            <h6>Q: How much time did you spend on {props.goal.goalTitle}?</h6>
            <GoalLineChart goal={props.goal}/>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <GoalForm/>
      </TabPanel>
    </Tabs>
  );
}
