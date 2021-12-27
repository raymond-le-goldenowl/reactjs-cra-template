import React, { Suspense } from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'
import { history, renderRouteConfigs, _routes } from './Router'
import './App.css'
import UseCallback from './FunctionalComponents/useCallback/UseCallback'
import { CountContextProvider } from './FunctionalComponents/useContext/CountContext'
import CounterUseContext from './FunctionalComponents/useContext/Counter'
import CounterEffect from './FunctionalComponents/useEffect/Counter'
import CounterUseMemo from './FunctionalComponents/useMemo/Counter'
import CounterUseReducer from './FunctionalComponents/useReducer/Counter'
import UserRef from './FunctionalComponents/useRef/UserRef'
import CounterUseState from './FunctionalComponents/useState/Counter'
// import MainTodo from './ClassComponents/TodoListApp/MainTodo'

function App() {
  console.log(process.env.REACT_APP_CLIENT_ID)
  console.log(process.env.REACT_APP_KEY)

  return (
    <>
      <div className="App">
        <Suspense fallback={<p>Loading...</p>}>
          <BrowserRouter history={history}>
            <nav>
              <ul className="nav">
                <li className="nav-item">
                  <NavLink to={'/'}>Main toso list</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to={'/about'}>About</NavLink>
                </li>
              </ul>
            </nav>
            {renderRouteConfigs(_routes)}
          </BrowserRouter>
        </Suspense>
        <h1>Xin chao</h1>

        {/* <MainTodo /> */}
        <CounterUseState />
        <CounterEffect />
        <CounterUseReducer />

        <CountContextProvider>
          <CounterUseContext />
        </CountContextProvider>

        <CounterUseMemo />

        <UseCallback />

        <UserRef />
      </div>
    </>
  )
}

export default App
