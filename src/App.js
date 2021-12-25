import React, { Suspense } from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'
import { history, renderRouteConfigs, _routes } from './Router'
import './App.css'

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
      </div>
    </>
  )
}

export default App
