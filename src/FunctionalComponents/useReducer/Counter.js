import * as React from 'react'

const countReducer = (state, action) => {
  const { type, step } = action
  switch (type) {
    case 'INCREMENT': {
      return {
        ...state,
        count: state.count + step
      }
    }
    case 'DECREMENT': {
      return {
        ...state,
        count: state.count - step
      }
    }
    default:
      return state
  }
}

export default function CounterUseReducer({ initialCount = 0, step = 1 }) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount
  })
  return (
    <div style={{ textAlign: 'center', marginTop: 30 }}>
      <button
        style={{ fontSize: '4rem', padding: '3rem' }}
        onClick={() => dispatch({ type: 'INCREMENT', step })}
      >
        +
      </button>
      <span style={{ fontSize: '4rem', padding: '3rem' }}>{state?.count}</span>
      <button
        style={{ fontSize: '4rem', padding: '3rem' }}
        onClick={() => dispatch({ type: 'DECREMENT', step })}
      >
        -
      </button>
    </div>
  )
}
