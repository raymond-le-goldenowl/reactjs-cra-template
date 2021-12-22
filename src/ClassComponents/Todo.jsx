import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <div>
        <h4 style={{ fontSize: '1.6rem' }}>
          {this.props.todo}
          <button>Delete</button>
          <button>Edit</button>
        </h4>
      </div>
    )
  }
}
