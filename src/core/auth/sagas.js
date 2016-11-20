import { browserHistory as history } from 'react-router'
import { call, fork, put, take } from 'redux-saga/effects'
import { firebaseAuth } from 'src/core/firebase'
import { authActions } from './actions'

function* signIn(email, password) {
  try {
    const authData = yield call([firebaseAuth, firebaseAuth.signInWithEmailAndPassword], email, password)
    yield put(authActions.signInFulfilled(authData.user))
    yield history.push('/')
  } catch (error) {
    yield put(authActions.signInFailed(error))
  }
}

function* signInWithPopup(authProvider) {
  try {
    const authData = yield call([firebaseAuth, firebaseAuth.signInWithPopup], authProvider)
    yield put(authActions.signInWithPopupFulfilled(authData.user))
    yield history.push('/')
  } catch (error) {
    yield put(authActions.signInWithPopupFailed(error))
  }
}

function* signOut() {
  try {
    yield call([firebaseAuth, firebaseAuth.signOut])
    yield put(authActions.signOutFulfilled())
    yield history.push('/sign-in')
  } catch (error) {
    yield put(authActions.signOutFailed(error))
  }
}

function* watchSignInWithPopup() {
  while (true) {
    let { payload } = yield take(authActions.SIGN_IN_WITH_POPUP)
    yield fork(signInWithPopup, payload.authProvider)
  }
}

function* watchSignIn() {
  while (true) {
    let { payload } = yield take(authActions.SIGN_IN)
    yield fork(signIn, payload.email, payload.password)
  }
}

function* watchSignOut() {
  while (true) {
    yield take(authActions.SIGN_OUT)
    yield fork(signOut)
  }
}


export const authSagas = [
  fork(watchSignIn),
  fork(watchSignInWithPopup),
  fork(watchSignOut)
]

