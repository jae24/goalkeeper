import React from 'react';
import { GoalPieChart } from './Metrics';
import GoalForm from './GoalForm';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

export default (props) => {
  if(!props.goal){
    return null;
  }
  return (
    <Tabs>
      <TabList>
        <Tab>
          <h3 className="goal-page-header">Metrics</h3>
        </Tab>
        <Tab>
          <h3 className="goal-page-header">Edit Goal</h3>
        </Tab>
      </TabList>

      <TabPanel>
        <h1 className="goal-page-header">{props.goal.goalTitle}</h1>
        <h3 className="goal-page-header">Start Date</h3>
        <div className="goal-page-content">July 1st, 2019</div>
        <h3 className="goal-page-header">Ending Date</h3>
        <div className="goal-page-content">July 21st, 2019</div>
        <h3 className="goal-page-header">Data</h3>
        <div className="row">
          <div className="col-md-4">
            <GoalPieChart goal={props.goal}/>
          </div>
          <div className="col-md-4">
            <GoalPieChart goal={props.goal}/>
          </div>
          <div className="col-md-4">
            <GoalPieChart goal={props.goal}/>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <GoalForm/>
      </TabPanel>
    </Tabs>
  );
}
