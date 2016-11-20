import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { authReducer } from 'src/core/auth'
import { usersReducer } from 'src/core/users'

export default combineReducers({
  routing: routerReducer,
  auth: authReducer,
  users: usersReducer
})