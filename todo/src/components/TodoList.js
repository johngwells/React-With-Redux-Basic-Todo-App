import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {  
  render () {
    return (
      <ul>
        {this.props.todos.map((todo) => {
          // chanaging <li> Refactor to TodoItem to add more features
          // then we need to import that new component as well.
          // return <TodoItem key={todo.id}>{todo.text}</TodoItem>
          // we want acces to the actual todo, instead of this.props we just pass in todo from the map function
          return <TodoItem key={todo.id} todo={todo}/>
        })}
      </ul>
    )
  }
}

export default TodoList