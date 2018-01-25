import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Honey Do List</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
