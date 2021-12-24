import './App.css'
import MainTodo from './ClassComponents/TodoListApp/MainTodo'

function App() {
  console.log(process.env.REACT_APP_CLIENT_ID)
  console.log(process.env.REACT_APP_KEY)

  return (
    <div className="App">
      <MainTodo />
    </div>
  )
}

export default App
