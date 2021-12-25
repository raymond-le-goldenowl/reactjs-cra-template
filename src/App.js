import React, { lazy } from 'react'
import { Route, Switch, REdirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import './App.css'
// import About from './About'
// import MainTodo from './ClassComponents/TodoListApp/MainTodo'

const About = lazy(() => import('./About'))
const MainTodo = lazy(() => import('./ClassComponents/TodoListApp/MainTodo'))

function App() {
  console.log(process.env.REACT_APP_CLIENT_ID)
  console.log(process.env.REACT_APP_KEY)

  return (
    <div className="App">
      <MainTodo />
      <About />
    </div>
  )
}

export default App
