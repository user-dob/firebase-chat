import React, { PropTypes } from 'react'
import { User } from 'src/core/users'

export const UserItem = ({user}) => {
  return (
    <div className="media conversation">
      <a className="pull-left" href="#">
        <img className="media-object" src={user.photoURL} />
      </a>
      <div className="media-body">
        <h5 className="media-heading">{user.displayName || user.email}</h5>
        <small>Hello</small>
      </div>
    </div>
  )
}


UserItem.propTypes = {
  user: PropTypes.instanceOf(User).isRequired
}

export default UserItem
