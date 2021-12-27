import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { history, _routes, renderRouteConfigs } from './review/Router'

function App() {
  console.log(process.env.REACT_APP_CLIENT_ID)
  console.log(process.env.REACT_APP_KEY)

  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <BrowserRouter history={history}>
          {renderRouteConfigs(_routes)}
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App
