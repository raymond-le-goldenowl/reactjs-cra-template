import './App.css'
import { CountContextProvider } from './FunctionalComponents/useContext/CountContext'
import CounterUseContext from './FunctionalComponents/useContext/Counter'
import CounterEffect from './FunctionalComponents/useEffect/Counter'
import CounterUseReducer from './FunctionalComponents/useReducer/Counter'
import CounterUseState from './FunctionalComponents/useState/Counter'
// import MainTodo from './ClassComponents/TodoListApp/MainTodo'
function App() {
  return (
    <div className="App">
      {/* <MainTodo /> */}
      <CounterUseState />
      <CounterEffect />
      <CounterUseReducer />

      <CountContextProvider>
        <CounterUseContext />
      </CountContextProvider>
    </div>
  )
}

export default App
