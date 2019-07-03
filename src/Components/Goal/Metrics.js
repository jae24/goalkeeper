import React from 'react';
import PieChart from 'react-minimal-pie-chart';

export const GoalPieChart = (props) => {
  if(!props.goal){
    return null;
  }

  const numOfYes = props.goal.creatorResponses && props.goal.creatorResponses.yes;
  const numOfNo = props.goal.creatorResponses && props.goal.creatorResponses.no;

  if(props.goal.creatorResponses.yes === 0 && props.goal.creatorResponses.no === 0){
    return (
      <div>
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
