import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <div>
        <h4 style={{ fontSize: '1.6rem' }}>
          {this.props.todo.content}
          <input
            type="checkbox"
            name="is-done"
            id="is-done"
            style={{ cursor: 'pointer' }}
          />
          <button onClick={() => this.props.deleteTodo(this.props.todo.id)}>
            Delete
          </button>
          <button>Edit</button>
        </h4>
      </div>
    )
  }
}
