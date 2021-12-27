import React from 'react'

export default class UpdateDataFromAnInput extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      name: '',
      age: 0
    }

    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Name: {this.state.name}</h3>
        <h3>Age: {this.state.age}</h3>

        <label>
          <h4>Name: </h4>
          <input type="text" name="name" onChange={this.onInputChange} />
        </label>

        <label>
          <h4>Age: </h4>
          <input type="number" name="age" onChange={this.onInputChange} />
        </label>
      </div>
    )
  }
}
