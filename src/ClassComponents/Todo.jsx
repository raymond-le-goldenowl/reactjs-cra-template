import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <div>
        <h4 style={{ fontSize: '1.6rem' }}>
          {this.props.todo.isDone ? (
            <span style={{ textDecoration: 'line-through' }}>
              {this.props.todo.content}
            </span>
          ) : (
            <span style={{ textDecoration: 'none' }}>
              {this.props.todo.content}
            </span>
          )}
        </h4>
        <div className="todo-handle">
          <input
            onClick={() => this.props.todoIsDone(this.props.todo.id)}
            type="checkbox"
            name="is-done"
            id="is-done"
            value={this.props.todo.isDone}
            style={{ cursor: 'pointer' }}
          />
          <button
            className="btn btn-primary"
            onClick={() => this.props.deleteTodo(this.props.todo.id)}
          >
            Delete
          </button>
          <button
            className="btn btn-primary"
            onClick={() => this.props.setTodoUpdate(this.props.todo.id)}
            data-bs-toggle="modal"
            data-bs-target="#EditTodoModel"
          >
            Edit
          </button>
        </div>
      </div>
    )
  }
}
