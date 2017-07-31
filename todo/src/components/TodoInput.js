import React, { Component } from 'react'

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    }
  }

  handleChange(event) {
    // Every component has a setState function
    // you pass in an object that you want to be updated
    this.setState({
      inputText: event.target.value
    })
    // console.log(event.target.value)
  }
  
  render () {
    return (
      <div>
      <input 
      // we dont want to be updating the Dom
      // we want to make changes to the state and have that update state
        type='text'
        placeholder='type in your todo task'
        // we are binding this.state.inputText
        value={this.state.inputText}
        onChange={this.handleChange.bind(this)}
      />
      <button>Submit</button>
      </div>
    )
  }
}

export default TodoInput