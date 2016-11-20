import { List, Record } from 'immutable'
import { usersActions } from './actions'
import { User } from './user'

export const UsersState = new Record({
  currentUser: null,
  users: new List()
})

export function usersReducer(state = new UsersState(), {type, payload}) {
  switch (type) {
    case usersActions.LOAD_USERS_FULFILLED:
      return state.update('users', users => new List(payload.users.map(item => new User(item))))

    default:
      return state
  }
}