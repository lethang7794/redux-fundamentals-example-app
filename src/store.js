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

const store = createStore(reducer)

export default store