import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = { todo_list: props.todo_list || [] }
  }
  render() {
    return (
      <div>
        {this.state.todo_list.map((todo, index) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    )
  }
}
