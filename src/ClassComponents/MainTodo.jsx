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
    this.addTodo = this.addTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.editTodo = this.editTodo.bind(this)
    this.todoIsDone = this.todoIsDone.bind(this)
  }

  addTodo(newTodo) {
    this.setState({
      todo_list: [...this.state.todo_list, newTodo]
    })
  }

  deleteTodo(id) {
    const newTodo = this.state.todo_list.filter(t => t.id !== id)
    this.setState({
      todo_list: newTodo
    })
  }

  editTodo(updateTodo) {
    const newTodo = this.state.todo_list.map(t => {
      if (t.id === updateTodo.id) {
        return updateTodo
      }
      return t
    })
    this.setState({
      todo_list: newTodo
    })
  }

  todoIsDone(id) {
    const newTodo = this.state.todo_list.map(t => {
      if (t.id === id) {
        t.isDone = !t.isDone
      }
      return t
    })
    this.setState({
      todo_list: newTodo
    })
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          name="todo-content"
          id="todo-content"
          style={{ fontSize: '2rem' }}
        />
        <button style={{ fontSize: '2rem' }}>Add</button>
        {
          <TodoList
            todo_list={this.state.todo_list}
            addTodo={this.addTodo}
            deleteTodo={this.deleteTodo}
            editTodo={this.editTodo}
            todoIsDone={this.todoIsDone}
          />
        }
      </div>
    )
  }
}
