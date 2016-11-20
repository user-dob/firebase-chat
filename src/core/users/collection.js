import { FirebaseCollection } from '../firebase'
import { usersActions } from './actions'
import { User } from './user'


export class UserCollection extends FirebaseCollection {

  constructor() {
    super('users', User)
  }

  createIfNotExist(user) {
    this.find('uid', user.uid)
      .then(value => {
        // if(value) {
        //   this.update()
        // }
        if(!value) {
          this.push(user)
        }
      })
  }

  onLoad(collection) {
    return usersActions.loadUsersFulfilled(collection)
  }

}

export const userCollection = new UserCollection()