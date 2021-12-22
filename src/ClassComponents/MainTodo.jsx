import React, { Component } from 'react'
import TodoList from './TodoList'

export default class MainTodo extends Component {
  constructor() {
    super()
    this.state = {
      todo_list: [
        { id: 1, content: 'sleep', isDone: false },
        { id: 2, content: 'eat', isDone: false },
        { id: 3, content: 'code', isDone: false }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input type="text" name="todo-content" id="todo-content" style={{ fontSize: '2rem' }} />
        <button style={{ fontSize: '2rem' }}>Add</button>
        {<TodoList todo_list={this.state.todo_list} />}
      </div>
    )
  }
}
