import React, { useReducer } from 'react'
import { countReducer } from './countReducer'

export const CountContext = React.createContext()

export const CountContextProvider = ({ children }) => {
  const initialCount = 0
  const [state, dispatch] = useReducer(countReducer, {
    count: initialCount
  })

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  )
}
