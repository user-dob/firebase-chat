import { Record } from 'immutable'

export const User = new Record({
  key: null,
  uid: null,
  displayName: null,
  email: null,
  photoURL: 'http://placehold.it/64x64',
  online: false
})