import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/Home.scss';

export default () => (
  <div className="home-wrapper">
    <div className="hero matte-panel index-panel">
      <div className="container">
        <div className="hero-text">
          <div className="tagline">Set your goals.</div>
          <div className="tagline">Reach them.</div>
          <button className="create-account-btn" style={{fontSize: '20px'}}>
            <Link to="/goals">Create an Account</Link>
          </button>
        </div>
      </div>
    </div>
    <div className="clear-panel index-panel" id="left-info-panel">
      <div className="row" style={{paddingTop : '150px'}}>
        <div className="col-md-6">
          <h1 className="mission-header" style={{textAlign: 'right'}}>Accountability</h1>
          <hr/>
        </div>
        <div className="col-md-6">
          <p className="info-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
    <div className="fresh-panel index-panel">
      <div className="row" style={{paddingTop : '75px'}}>
        <div className="col-md-6">
          <p className="info-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="col-md-6">
          <h1 className="mission-header">Consistency</h1>
          <hr/>
        </div>
      </div>
    </div>
    <div className="index-panel">
        <h1 style={{textAlign: "center"}}>How It Works</h1>
          <div className="row info-box">
            <div className="col-md-3">
              <div className="pic-div">
                <img className="info-icon" alt="info-pic" src="https://image.flaticon.com/icons/svg/236/236803.svg"/>
              </div>
              <h3 className="info-box-title">Create a Goal</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="col-md-3">
              <div className="pic-div">
                <img className="info-icon" alt="info-pic" src="https://image.flaticon.com/icons/svg/236/236802.svg"/>
              </div>
              <h3 className="info-box-title">Configure Settings</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="col-md-3">
              <div className="pic-div">
                <img className="info-icon" alt="info-pic" src="https://image.flaticon.com/icons/svg/236/236850.svg"/>
              </div>
              <h3 className="info-box-title">Daily Reminders</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="col-md-3">
              <div className="pic-div">
                <img className="info-icon" alt="info-pic" src="https://image.flaticon.com/icons/svg/236/236800.svg"/>
              </div>
              <h3 className="info-box-title">Track Your Progress</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
    </div>
)
