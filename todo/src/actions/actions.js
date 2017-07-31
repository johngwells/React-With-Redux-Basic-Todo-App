// Every action has a type
// This is how the reducers know how to handle the action
// and update the state

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    text: text
  };
}