
export const usersActions = {
  CREATE_USER: 'CREATE_USER',
  CREATE_USER_FAILED: 'CREATE_USER_FAILED',
  CREATE_USER_FULFILLED: 'CREATE_USER_FULFILLED',

  USER_ONLINE: 'USER_ONLINE',
  USER_OFFLINE: 'USER_OFFLINE',

  LOAD_USERS_FULFILLED: 'LOAD_USERS_FULFILLED',

  createUser: user => ({
    type: usersActions.CREATE_USER,
    payload: {user}
  }),

  createUserFailed: error => ({
    type: usersActions.CREATE_USER_FAILED,
    payload: {error}
  }),

  createUserFulfilled: user => ({
    type: usersActions.CREATE_USER_FULFILLED,
    payload: {user}
  }),

  userOnline: user => ({
    type: usersActions.USER_ONLINE,
    payload: {user}
  }),

  userOffline: user => ({
    type: usersActions.USER_OFFLINE,
    payload: {user}
  }),

  loadUsersFulfilled: users => ({
    type: usersActions.LOAD_USERS_FULFILLED,
    payload: {users}
  })
}