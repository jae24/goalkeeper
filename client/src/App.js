import React from 'react';
import GoalForm from './Components/GoalForm'
import Goals from './Components/Goals'

const dummyData = [
  {
    name: 'lose weight',
    description: '50 pounds'
  },
  {
    name: 'eat less',
    description: 'carbs'
  },
  {
    name: 'work out every day',
    description: 'at the gym'
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
