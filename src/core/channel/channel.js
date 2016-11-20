import { Record, List } from 'immutable'

export const Channel = new Record({
  userFrom: null,
  userTo: null,
  messages: new List()
})
