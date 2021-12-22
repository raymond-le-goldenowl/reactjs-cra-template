import React, { useEffect, useState } from 'react'

export default function CounterEffect() {
  const [count, setCount] = useState(() => 0)
  const [title, setTitle] = useState(() => 'count = 0')

  useEffect(() => {
    setTitle(() => 'count = ' + count)
  }, [count])

  return (
    <div style={{ textAlign: 'center', marginTop: 30 }}>
      <button
        style={{ fontSize: '4rem', padding: '3rem' }}
        onClick={() => setCount(prev => prev + 1)}
      >
        +
      </button>
      <span
        style={{ fontSize: '4rem', padding: '3rem' }}
        onClick={() => setCount(prev => prev + 1)}
      >
        {title}
      </span>
      <button
        style={{ fontSize: '4rem', padding: '3rem' }}
        onClick={() => setCount(prev => prev - 1)}
      >
        -
      </button>
    </div>
  )
}
