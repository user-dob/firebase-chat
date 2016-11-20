import { Record } from 'immutable'
import { authActions } from './actions'

export const AuthState = new Record({
  isAuthenticated: false,
  uid: null,
  user: null,
  errorMessage: null
})

export function authReducer(state = new AuthState(), {payload, type}) {
  switch (type) {
    case authActions.SIGN_IN_FULFILLED:
    case authActions.SIGN_IN_WITH_POPUP_FULFILLED:
      return state.merge({
        isAuthenticated: true,
        uid: payload.id,
        user: payload,
        errorMessage: null
      })

    case authActions.SIGN_OUT_FULFILLED:
      return state.merge({
        isAuthenticated: false,
        uid: null,
        user: null,
        errorMessage: null
      })

    case authActions.SIGN_IN_WITH_POPUP_FAILED:
    case authActions.SIGN_IN_FAILED:
      return state.merge({
        errorMessage: payload.error.message
      })

    default:
      return state
  }
}