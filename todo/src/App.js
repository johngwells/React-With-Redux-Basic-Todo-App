import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { connect } from 'react-redux';

// connect creates a function that connects this component 
// this new component will listen to changes in the provider/ in the store
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
        <TodoInput dispatch={this.props.dispatch}/>
        <TodoList todos={this.props.todos}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}
// you want to map the props
export default connect(mapStateToProps)(App)