import { useReducer } from 'react'
import { BookContext } from './bookContext'
import { bookReducer } from './bookReducer'

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, {
    books: []
  })

  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  )
}
