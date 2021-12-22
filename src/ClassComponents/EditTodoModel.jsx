import React, { Component } from 'react'

export default class EditTodoModel extends Component {
  constructor(props) {
    super(props)
    this.handleSaveChange = this.handleSaveChange.bind(this)
  }

  handleSaveChange() {
    this.props.editTodo(this.props.todo_update[0])
  }
  render() {
    const content = this.props?.todo_update[0]?.content ?? ''
    return (
      <>
        {/* Modal */}
        <div
          className="modal fade"
          id="EditTodoModel"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {this.props?.todo_update[0]?.id ? (
                    <span>
                      Edit todo with id = {this.props?.todo_update[0]?.id}
                    </span>
                  ) : (
                    <span>Nothing to update</span>
                  )}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              {/* input to update todo */}
              <div className="modal-body">
                <input
                  type="text"
                  value={content}
                  onChange={e =>
                    this.props.setOnInputChangeForUpdate(e.target.value)
                  }
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={e => this.handleSaveChange(e)}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
