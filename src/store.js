import { createStore } from 'redux'

const initialState = {
  todos: [
    { id: 1, text: 'Learn Redux' },
    { id: 2, text: 'Make my teacher proud'},
  ],
}

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}


// @param of createStore
// A function that returns the next state tree, given the current state tree and the action to handle.
const reducer = (state = initialState, action) => {
  if (action.type === 'addTodo') {
    return {
      todos: [
        ...state.todos,
        {
          id: nextTodoId(state.todos),
          text: action.payload,
        }
      ]
    }
  } 

  return state
}

// createStore: Creates a Redux store that holds the state tree. The only way to change the data in the store is to call dispatch() on it.
const store = createStore(reducer)

export default store