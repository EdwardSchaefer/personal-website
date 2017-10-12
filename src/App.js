import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import getRepos from './ajax.js'
||||||| merged common ancestors
=======
import getRepos from './ajax.js';
>>>>>>> 7d8ccb54dc4e1864a4b4c766e3933cc087d82c03

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <User />
      </div>
    );
  }
}

class Repo extends Component {
  render() {
    return (
      <div>Repo {this.props.i}</div>
    )
  }
}

class User extends Component {
  render() {
    return (
      <div>
        <div>
          User component
        </div>
        <Repo i="1" />
        <Repo i="2" />
        <Repo i="3" />
      </div>
    );
  }
}

export default App;