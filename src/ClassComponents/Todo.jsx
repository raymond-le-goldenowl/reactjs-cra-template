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

          <input
            onClick={() => this.props.todoIsDone(this.props.todo.id)}
            type="checkbox"
            name="is-done"
            id="is-done"
            style={{ cursor: 'pointer' }}
          />
          <button onClick={() => this.props.deleteTodo(this.props.todo.id)}>
            Delete
          </button>
          <button data-bs-toggle="modal" data-bs-target="#EditTodoModel">
            Edit
          </button>
        </h4>
      </div>
    )
  }
}
