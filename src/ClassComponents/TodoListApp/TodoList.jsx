import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  render() {
    return (
      <div id="todo-list">
        {this.props.todo_list.map((todo, index) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={this.props.deleteTodo}
            todoIsDone={this.props.todoIsDone}
            setTodoUpdate={this.props.setTodoUpdate}
          />
        ))}
      </div>
    )
  }
}
