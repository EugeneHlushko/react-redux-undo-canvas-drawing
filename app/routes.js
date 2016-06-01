import React from 'react'
import { Route } from 'react-router'
import App from 'containers/app'
import EditorPage from 'pages/editor'

export default (
  <Route component={ App }>
    <Route path='/' component={ EditorPage } />
  </Route>
)
