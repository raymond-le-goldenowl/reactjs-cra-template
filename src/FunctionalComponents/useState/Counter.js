import React, { useState } from 'react'

export default function CounterUseState() {
  const [count, setCount] = useState(() => 0)

  return (
    <div style={{ textAlign: 'center', marginTop: 30 }}>
      <button
        style={{ fontSize: '4rem', padding: '3rem' }}
        onClick={() => setCount(prev => prev + 1)}
      >
        +
      </button>
      <span style={{ fontSize: '4rem', padding: '3rem' }}>{count}</span>
      <button
        style={{ fontSize: '4rem', padding: '3rem' }}
        onClick={() => setCount(prev => prev - 1)}
      >
        -
      </button>
    </div>
  )
}
