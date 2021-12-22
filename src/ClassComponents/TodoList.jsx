import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.todo_list.map((todo, index) => (
          <Todo
            key={todo.id}
            todo={todo}
            addTodo={this.props.addTodo}
            deleteTodo={this.props.deleteTodo}
            editTodo={this.props.editTodo}
            todoIsDone={this.props.todoIsDone}
          />
        ))}
      </div>
    )
  }
}
