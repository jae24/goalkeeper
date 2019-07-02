import React from 'react';
import Header from './Components/Global/Header'
import Footer from './Components/Global/Footer'
import Home from './Components/HomePage/Home'
import Goals from './Components/Goal/Goals'
import GoalPage from './Components/Goal/GoalPage'
import GoalCreationPage from './Components/Goal/GoalCreationPage'
import ScrollToTop from './ScrollToTop'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-dates/lib/css/_datepicker.css';
import './App.scss'

function App() {
  return (
    <Router>
     <ScrollToTop>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/goals" exact component={Goals}/>
          <Route path="/create" exact component={GoalCreationPage}/>
          <Route path="/goals/:id" exact component={GoalPage}/>
        </Switch>
        <Footer/>
      </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
