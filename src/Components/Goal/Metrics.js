import React from 'react';
import PieChart from 'react-minimal-pie-chart';
import { LineChart } from 'react-chartkick';
import 'chart.js'

// export const GoalCompletionChart = (props) => {
//   return (
//     <PieChart
//       data={[{
//           value: 82,
//           color: '#FF6A5C'
//         }]}
//       totalValue={100}
//       lineWidth={20}
//       style={{width: '100px'}}
//       label
//       labelStyle={{
//         fontSize: '25px',
//         fontFamily: 'sans-serif'
//       }}
//       labelPosition={0}
//       animate
//     />
//   )
// }

export const GoalPieChart = (props) => {
  if(!props.goal){
    return null;
  }

  const numOfYes = props.goal.yesCount
  const numOfNo = props.goal.noCount

  if(props.goal.yesCount === 0 && props.goal.noCount === 0){
    return (
      <div className="text-muted">
        No data yet.
      </div>
    )
  }

  return (
        <div>
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

// export const GoalLineChart = (props) => {
//
//   if(!props.goal){
//     return null;
//   }
//
//   const numOfYes = props.goal.yesCount
//   const numOfNo = props.goal.noCount
//
//   if(props.goal.yesCount === 0 && props.goal.noCount === 0){
//     return (
//       <div className="text-muted">
//         No data yet.
//       </div>
//     )
//   }
//
//
//   const dummyData = [{
//     name: "actual",
//     data: {
//               "2019-06-13": 2,
//               "2019-06-14": 0,
//               "2019-06-15": 1,
//               "2019-06-16": 3,
//               "2019-06-17": 0,
//               "2019-06-18": 0,
//               "2019-06-19": 1,
//               "2019-06-20": 1,
//               "2019-06-21": 2,
//               "2019-06-22": 2
//           }
//   },
//   {
//     name: "goal",
//     data: {
//               "2019-06-13": 1,
//               "2019-06-14": 1,
//               "2019-06-15": 1,
//               "2019-06-16": 1,
//               "2019-06-17": 1,
//               "2019-06-18": 1,
//               "2019-06-19": 1,
//               "2019-06-20": 1,
//               "2019-06-21": 1,
//               "2019-06-22": 1
//           }
//   }]
//
//
//   if(!props.goal){
//     return null;
//   }
//
//   return (
//     <LineChart data={dummyData} xtitle="Date" ytitle="Hours Spent" width="80%" />
//   )
//
// }
