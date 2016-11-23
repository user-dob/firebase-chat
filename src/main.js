import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-social/bootstrap-social.css'
import 'font-awesome/css/font-awesome.min.css'
import 'src/views/style/login.css'
import 'src/views/style/chat.css'

import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from 'src/core/store'
import { initAuth } from 'src/core/auth'

import Root from './views/root'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
const rootElement = document.getElementById('root')

function render(Root) {
  ReactDOM.render(
    <AppContainer>
      <Root history={history} store={store} />
    </AppContainer>,
    rootElement
  )
}

initAuth(store.dispatch)
  .then(() => render(Root))
  .catch(error => console.log(error))