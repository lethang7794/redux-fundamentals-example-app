import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'

const TodoList = () => {
  // useSelector: A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state.
  const todos = useSelector(state => state.todos)

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </ul>
  )
}

export default TodoList
