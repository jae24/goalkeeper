import React from 'react';
import Goals from './Components/Goals'
import Header from './Components/Global/Header'
import Footer from './Components/Global/Footer'
import About from './Components/About'
import Home from './Components/HomePage/Home'
import GoalPage from './Components/GoalPage'
import GoalCreationPage from './Components/GoalCreationPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-dates/lib/css/_datepicker.css';
import './App.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/goals" exact component={Goals}/>
          <Route path="/create" exact component={GoalCreationPage}/>
          <Route path="/about" exact component={About}/>
          <Route path="/goals/:id" exact component={GoalPage}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
