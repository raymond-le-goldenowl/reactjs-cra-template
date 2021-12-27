import React, { useContext } from 'react'
import { CountContext } from './CountContext'

export default function CounterUseContext() {
  const step = 1
  const { state, dispatch } = useContext(CountContext)

  return (
    <div style={{ textAlign: 'center', marginTop: 30 }}>
      <button
        style={{ fontSize: '4rem', padding: '3rem' }}
        onClick={() => dispatch({ type: 'INCREMENT', step })}
      >
        +
      </button>
      <span style={{ fontSize: '4rem', padding: '3rem' }}>
        count = {state?.count}
      </span>
      <button
        style={{ fontSize: '4rem', padding: '3rem' }}
        onClick={() => dispatch({ type: 'DECREMENT', step })}
      >
        -
      </button>
    </div>
  )
}
