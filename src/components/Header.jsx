import React, { useState } from 'react'

const Header = () => {
  const [text, setText] = useState('')

  const handleChange = (e) => setText(e.target.value)

  const handleKeyDown = (e) => {
    const trimmedText = text.trim()
    if (e.key === 'Enter' && trimmedText) {
      alert('Adding todo: ' + trimmedText)
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
