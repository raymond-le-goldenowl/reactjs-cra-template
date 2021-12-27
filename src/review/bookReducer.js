import {
  GET_ALL_BOOKS,
  COUNT_OF_CURRENT_BOOKS,
  COUNT_OF_FILTERED_BOOKS
} from './actions'

export const bookReducer = (state, action) => {
  const { type, step } = action
  switch (type) {
    case GET_ALL_BOOKS: {
      return {
        ...state,
        count: state.count + step
      }
    }
    case COUNT_OF_CURRENT_BOOKS: {
      return {
        ...state,
        count: state.count - step
      }
    }
    case COUNT_OF_FILTERED_BOOKS: {
      return {
        ...state,
        count: state.count - step
      }
    }
    default:
      return state
  }
}
