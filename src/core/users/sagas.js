import {eventChannel} from 'redux-saga'
import {call, fork, put, take, cansel} from 'redux-saga/effects'
import {usersActions} from './actions'
import {authActions} from '../auth'
import {userCollection} from './collection'
import {bringUser} from './utils'

function subscribe() {
  return eventChannel(emit => userCollection.subscribe(emit))
}

function* read() {
  const channel = yield call(subscribe)
  while (true) {
    let action = yield take(channel)
    yield put(action)
  }
}

function* createUser(user) {
  try {
    yield call([userCollection, userCollection.createIfNotExist], user)
  } catch (error) {
    yield put(usersActions.createUserFailed(error))
  }
}

function* watchCreateUser() {
  while (true) {
    let { payload } = yield take(usersActions.CREATE_USER)
    yield fork(createUser, bringUser(payload.user))
  }
}

function* watchAuthentication() {
  while (true) {
    let {payload} = yield take([authActions.SIGN_IN_FULFILLED, authActions.SIGN_IN_WITH_POPUP_FULFILLED])
    yield put(usersActions.createUser(payload.authUser))
    const job = yield fork(read)

    yield take([authActions.SIGN_OUT_FULFILLED])
    yield cansel(job)
  }
}

export const usersSagas = [
  fork(watchAuthentication),
  fork(watchCreateUser)
]