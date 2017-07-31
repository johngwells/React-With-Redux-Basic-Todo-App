// any value greater than -1 will find/create new maxID which you can use
// +1 will add the new id
function getId(state) {
  return state.todos.reduce((maxId, todo) => {
    return Math.max(todo.is, maxId)
  }, -1) + 1
}

export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
    // first state brings in all the state's data into the empty object
    // the second one below ...state, todos overwrites that object
      Object.assign({}, state, {
        todos: [{
          text: action.text,
          completed: false,
          // helper function getId() pass in state and find the next ID to use thats unique
          id: getId(state)
          // add new todo info
        }, ...state.todos]
      })
    default:
      return state;
  }
}