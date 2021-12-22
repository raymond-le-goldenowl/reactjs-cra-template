import React, { Component } from 'react'

export default class EditTodoModel extends Component {
  render() {
    return (
      <>
        {/* Modal */}
        <div
          class="modal fade"
          id="EditTodoModel"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  {this.props?.todo?.id ? (
                    <span>Edit todo with id = {this.props?.todo?.id}</span>
                  ) : (
                    <span>Nothing to update</span>
                  )}
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              {/* input to update todo */}
              <div class="modal-body">
                <input type="text" />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
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
