import React, { Component } from 'react';

import logo from './logo.svg';
import './styles.css';
import SignupForm from './components/SignupForm';
import SignupResult from './components/SignupResult';

class Dashboard extends Component {
  state = { submitted: false };

  submitForm = values => this.setState({submitted: true});

  cleanForm = () => this.setState({submitted: false});

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h1 className="App-subtitle">This is a finger exercise</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {!this.state.submitted ? <SignupForm onSubmit={this.submitForm} /> : <SignupResult handleButtonClick={this.cleanForm} />}
      </div>
    );
  }
}

export default Dashboard;
