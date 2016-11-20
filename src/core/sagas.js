import { authSagas } from './auth'
import { usersSagas } from './users'

export default function* sagas() {
  yield [
    ...authSagas,
    ...usersSagas
  ]
}