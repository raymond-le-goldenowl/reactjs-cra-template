import './App.css'
import UseCallback from './FunctionalComponents/useCallback/UseCallback'
import { CountContextProvider } from './FunctionalComponents/useContext/CountContext'
import CounterUseContext from './FunctionalComponents/useContext/Counter'
import CounterEffect from './FunctionalComponents/useEffect/Counter'
import CounterUseMemo from './FunctionalComponents/useMemo/Counter'
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

      <CounterUseMemo />

      <UseCallback />
    </div>
  )
}

export default App
