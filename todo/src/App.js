import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Todo List</h1>
        </div>
        <div className="App-intro">
          <h1>What's on your mind?</h1>
        </div>
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

export default App;