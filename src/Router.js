import React, { lazy } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import { createBrowserHistory } from 'history'

const MainTodo = lazy(() => import('./ClassComponents/TodoListApp/MainTodo'))
const About = lazy(() => import('./About'))

export const history = createBrowserHistory()

const DefaultRouteComponent = () => <Navigate to={_routes.home.path} />

export const _routes = {
  home: {
    path: '/',
    exact: true,
    component: MainTodo
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
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            path={route.path}
            exact={route.exact}
            // eslint-disable-next-line react/jsx-indent-props
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
