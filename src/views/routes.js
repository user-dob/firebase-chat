import App from './app'
import SignInPage from './pages/sign-in'
import ChatPage from './pages/chat'

import { isAuthenticated } from 'src/core/auth'

const requireAuth = getState => {
  return (nextState, replace) => {
    if (!isAuthenticated(getState())) {
      replace('/sign-in')
    }
  }
}

const requireUnauth = getState => {
  return (nextState, replace) => {
    if (isAuthenticated(getState())) {
      replace('/')
    }
  }
}


export const getRoutes = getState => {
  return {
    path: '/',
    component: App,
    childRoutes: [
      {
        indexRoute: {
          component: ChatPage,
          onEnter: requireAuth(getState)
        }
      },
      {
        path: '/sign-in',
        component: SignInPage,
        onEnter: requireUnauth(getState)
      }
    ]
  }
}
