import React, { PropTypes } from 'react'
import { List } from 'immutable'
import UserItem from '../user-item'

export const UsersList = ({users}) => {
  return (
    <div className="conversation-wrap col-lg-3">
      {users.map(user => <UserItem key={user.uid} user={user} />)}
    </div>
  )
}

UsersList.propTypes = {
  users: PropTypes.instanceOf(List).isRequired
}

export default UsersList
