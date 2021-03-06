import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Header = () => {
  const [text, setText] = useState('')
  
  // useDispatch: A hook to access the redux dispatch function.
  // The only way to change the data in the store is to call dispatch() on it.
  const dispatch = useDispatch();

  const handleChange = (e) => setText(e.target.value)

  const handleKeyDown = (e) => {
    const trimmedText = text.trim()
    if (e.key === 'Enter' && trimmedText) {
      dispatch({
        type: 'addTodo',
        payload: trimmedText,
      })
      setText('')
    }
  }
  
  return (
    <header className="header">
      <input
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        input='text'
        className='new-todo'
        placeholder='What needs to be done?'
      />
    </header>
  )
}

export default Header
