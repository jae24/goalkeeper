import React from 'react';
import GoalForm from './Components/GoalForm'
import Goals from './Components/Goals'

const dummyData = [
  {
    name: 'Work on Portfolio',
    daysLeft: 10,
    completion: 100,
    hoursPerDay: 2
  },
  {
    name: 'Connect with recruiters',
    daysLeft: 10,
    completion: 100,
    hoursPerDay: 2
  },
  {
    name: 'Work on Projects',
    daysLeft: 10,
    completion: 100,
    hoursPerDay: 2
  }
]

function App() {
  return (
    <div className="App">
      <GoalForm />
      <Goals goals={dummyData}/>
    </div>
  );
}

export default App;
