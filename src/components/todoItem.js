import React from 'react'

const todoItem = (props) => {
  console.log(props);
  return (
  <li>
    {props.todo.title}
    <button>
      edit
    </button>
    <button>
      delete
    </button>
  </li>
  )
}

export default todoItem
