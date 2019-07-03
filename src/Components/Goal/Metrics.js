import React from 'react';
import PieChart from 'react-minimal-pie-chart';
import { LineChart } from 'react-chartkick';
import 'chart.js'

export const GoalPieChart = (props) => {
  if(!props.goal){
    return null;
  }

  const numOfYes = props.goal.creatorResponses && props.goal.creatorResponses.done.yes;
  const numOfNo = props.goal.creatorResponses && props.goal.creatorResponses.done.no;

  if(props.goal.creatorResponses.done.yes === 0 && props.goal.creatorResponses.done.no === 0){
    return (
      <div className="text-muted">
        No data yet.
      </div>
    )
  }

  return (
        <div>
            <h4 className="goal-page-header">Response Chart</h4>
            <div className="pie-chart-legend">
              <div className="red-block"/>
              <div>Yes</div>
              <div className="blue-block"/>
              <div>No</div>
            </div>
            <PieChart
              data={[
                { title: 'Yes', value: numOfYes, color: '#FF6A5C'},
                { title: 'No', value: numOfNo, color: '#056571' },
              ]}
              style={{height: '300px', float: 'left'}}
              label
              labelStyle={{
                fontSize: '5px',
                color: '#fff',
                fontFamily: "'Staatliches', cursive",
                fill: '#fff'
              }}
              animate
            />
        </div>
  )
}

export const GoalLineChart = (props) => {

  const dummyData = {
    "2019-06-13": 2,
    "2019-06-14": 0,
    "2019-06-15": 1,
    "2019-06-16": 3,
    "2019-06-17": 0,
    "2019-06-18": 0,
    "2019-06-19": 1,
    "2019-06-20": 1,
    "2019-06-21": 2,
    "2019-06-22": 2
  }
  if(!props.goal){
    return null;
  }

  return (
    <LineChart data={dummyData} xtitle="Date" ytitle="Hours Spent" width="1000px" />
  )

}
