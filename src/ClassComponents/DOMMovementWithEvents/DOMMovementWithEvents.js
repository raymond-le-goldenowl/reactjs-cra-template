import React from 'react'

export default class DOMMovementWithEvents extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      position: 0
    }
    this.onClickButton = this.onClickButton.bind(this)
  }

  onClickButton() {
    const defaultValue = 40
    this.setState(prev => {
      return { position: prev.position + defaultValue }
    })
  }

  render() {
    return (
      <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        <div
          style={{ textAlign: 'center', position: 'relative', zIndex: '10' }}
        >
          <button onClick={this.onClickButton}>👆 Move Up 👆</button>
        </div>
        {this.state.position}
        <div
          style={{
            width: 100,
            height: 100,
            position: 'absolute',
            bottom: this.state.position,
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'black'
          }}
        ></div>
      </div>
    )
  }
}
