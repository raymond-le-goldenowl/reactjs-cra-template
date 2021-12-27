import React, { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { createBrowserHistory } from 'history'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

export const history = createBrowserHistory()

const DefaultRouteComponent = () => <Navigate to={_routes.home.path} />

export const _routes = {
  home: {
    path: '/',
    exact: true,
    component: Home
  },
  about: {
    path: '/about',
    exact: true,
    component: About
  },
  default: {
    path: '/',
    component: DefaultRouteComponent
  }
}

export function renderRouteConfigs(_routes) {
  return (
    <Routes>
      {Object.values(_routes).map((route, index) => {
        const Layout = route.layout || React.Fragment
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={
              <Layout>
                <route.component />
              </Layout>
            }
          />
        )
      })}
    </Routes>
  )
}
