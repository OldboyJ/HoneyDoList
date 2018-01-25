import React from 'react'

class TodoList extends React.Component {
  state = [
    {
      title: 'Take out the trash',
      id: 1
    },
    {
      title: 'Clean the bathroom',
      id: 2
    }
  ]
  render() {
    const todoItem = this.state.map((item) => {
      return <li>{item.title}</li>
    })
    return (
      <div>
        <ul>
          {todoItem}
        </ul>
      </div>
    )
  }
}

export default TodoList
