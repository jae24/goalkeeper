import React from 'react';
import Goals from './Components/Goals'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Components/About'
import Home from './Components/Home'
import GoalPage from './Components/GoalPage'
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
          <Route path="/about" exact component={About}/>
          <Route path="/goals/:id" exact component={GoalPage}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
