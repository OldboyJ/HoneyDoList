import React from 'react'
import TodoItem from './todoItem'

class TodoList extends React.Component {
  state = {
    listData: [
    {
      title: 'Take out the trash',
      id: 1
    },
    {
      title: 'Clean the bathroom',
      id: 2
    }
  ]
  }
  render() {
    const todoItem = this.state.listData.map((item, index) => {
      return <TodoItem key={index} todo={item}/>
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
