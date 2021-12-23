import React from 'react'

class StatCard extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          borderRadius: 10,
          margin: 10,
          padding: 10,
          backgroundColor: '#FFFF'
        }}
      >
        <div>
          <span>{this.props?.icon}</span>
          <span>{this.props?.label}</span>
        </div>
        <div style={{ fontSize: '2.2rem', color: '#444', fontWeight: 'bold' }}>
          {this.props?.number.toLocaleString()}
        </div>
      </div>
    )
  }
}

export default class MainStatCard extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: '#4bb9f1',
          padding: 40,
          overflow: 'hidden'
        }}
      >
        <StatCard icon="👉" label="Points" number={3000} />
        <StatCard icon="⚡" label="Lightnings" number={6540} />
        <StatCard icon="🤙" label="Shakas" number={337010} />
        <StatCard icon="💎" label="Diamonds" number={98661} />
      </div>
    )
  }
}
