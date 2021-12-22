export const countReducer = (state, action) => {
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
