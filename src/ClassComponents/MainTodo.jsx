import React, { Component } from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'
import EditTodoModel from './EditTodoModel'

export default class MainTodo extends Component {
  constructor() {
    super()
    this.state = {
      // create init data
      todo_list: [
        {
          id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          content: 'sleep',
          isDone: false
        },
        {
          id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
          content: 'eat',
          isDone: false
        },
        {
          id: '2b0d7b3d-fbd1-412d-9b1d-1b9d6bcdsf2g',
          content: 'code',
          isDone: false
        }
      ],
      content: ''
    }

    // bind methods
    this.addTodo = this.addTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.editTodo = this.editTodo.bind(this)
    this.todoIsDone = this.todoIsDone.bind(this)
  }

  // add new todo
  addTodo(newTodo) {
    this.setState({
      content: '',
      todo_list: [...this.state.todo_list, newTodo]
    })
  }
  // delete a todo
  deleteTodo(id) {
    const newTodo = this.state.todo_list.filter(t => t.id !== id)
    this.setState({
      content: this.state.content,
      todo_list: newTodo
    })
  }
  // edit a todo
  editTodo(updateTodo) {
    const newTodo = this.state.todo_list.map(t => {
      if (t.id === updateTodo.id) {
        return updateTodo
      }
      return t
    })
    this.setState({
      content: this.state.content,
      todo_list: newTodo
    })
  }
  // change todo is available
  todoIsDone(id) {
    const newTodo = this.state.todo_list.map(t => {
      if (t.id === id) {
        t.isDone = !t.isDone
      }
      return t
    })
    this.setState({
      content: this.content,
      todo_list: newTodo
    })
  }
  // click add button to add new todo.
  handleClickAdd() {
    const id = uuidv4()
    const content = this.state.content
    const isDone = false
    if (String(content).trim().replace(' ', '').length === 0) {
      this.setState({
        content: '',
        todo_list: this.state.todo_list
      })
      return
    } else {
      this.addTodo({ id, content, isDone })
    }
  }
  // get value input on changing.
  handleInputChange(e) {
    this.setState({
      content: e.target.value,
      todo_list: this.state.todo_list
    })
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          onChange={e => this.handleInputChange(e)}
          value={this.state.content}
          type="text"
          name="todo-content"
          id="todo-content"
          style={{ fontSize: '2rem' }}
        />
        <button
          style={{ fontSize: '2rem' }}
          onClick={() => this.handleClickAdd()}
        >
          Add
        </button>
        {
          <TodoList
            todo_list={this.state.todo_list}
            addTodo={this.addTodo}
            deleteTodo={this.deleteTodo}
            editTodo={this.editTodo}
            todoIsDone={this.todoIsDone}
          />
        }

        <EditTodoModel />
      </div>
    )
  }
}
