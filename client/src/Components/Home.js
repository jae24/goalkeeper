import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="home-wrapper">
    <div className="hero matte-panel index-panel">
      <div className="container">
        <div className="hero-text">
          <div>Set Your Goals. </div>
          <div>Achieve Them. </div>
          <button className="create-account-btn" style={{fontSize: '20px'}}>
            <Link to="/goals">Create an Account</Link>
          </button>
        </div>
      </div>
    </div>
    <div className="clear-panel index-panel">
      <div className="row" style={{paddingTop : '150px'}}>
        <div className="col-md-6">
          <p className="info-text"><h1 style={{fontWeight: 'bolder', textAlign: 'center', color: '#056571', textTransform: 'uppercase'}}>Accountability</h1></p>
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
          <p className="info-text">
            <h1 style={{fontWeight: 'bolder', textAlign: 'center', color: '#fff', textTransform: 'uppercase'}}>Consistency</h1>
            <hr/>
          </p>
        </div>
      </div>
    </div>
    <div className="index-panel">
        <h1 style={{textAlign: "center"}}>How It Works</h1>
          <div className="row info-box">
            <div className="col-md-3">
              <div className="pic-div">
                <img className="info-icon" src="https://image.flaticon.com/icons/svg/236/236803.svg"/>
              </div>
              <h3 className="info-box-title">Create a Goal</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="col-md-3">
              <div className="pic-div">
                <img className="info-icon" src="https://image.flaticon.com/icons/svg/236/236802.svg"/>
              </div>
              <h3 className="info-box-title">Configure Settings</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="col-md-3">
              <div className="pic-div">
                <img className="info-icon" src="https://image.flaticon.com/icons/svg/236/236850.svg"/>
              </div>
              <h3 className="info-box-title">Daily Reminders</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="col-md-3">
              <div className="pic-div">
                <img className="info-icon" src="https://image.flaticon.com/icons/svg/236/236800.svg"/>
              </div>
              <h3 className="info-box-title">Track Your Progress</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </div>
  </div>
)
