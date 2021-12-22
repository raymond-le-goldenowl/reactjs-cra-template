import './App.css'
import CounterEffect from './FunctionalComponents/useEffect/Counter'
import CounterUseState from './FunctionalComponents/useState/Counter'
// import MainTodo from './ClassComponents/TodoListApp/MainTodo'
function App() {
  return (
    <div className="App">
      {/* <MainTodo /> */}
      <CounterUseState />
      <CounterEffect />
    </div>
  )
}

export default App
