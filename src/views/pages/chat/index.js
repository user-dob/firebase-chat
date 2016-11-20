import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { List } from 'immutable'
import { authActions } from 'src/core/auth'
import { getUsers } from 'src/core/users'
import UsersList from '../../components/user-list'
import MesssageList from '../../components/message-list'
import MessageSend from '../../components/message-send'

export const ChatPage = ({signOut, users, messages}) => {
  return (
    <div className="container">
      <div className="row c-panel">
        <UsersList users={users} />
        <div className="message-wrap col-lg-8">
          <MesssageList messages={messages} />
          <MessageSend />
        </div>
      </div>
    </div>
  )
}

ChatPage.propTypes = {
  signOut: PropTypes.func.isRequired,
  users: PropTypes.instanceOf(List).isRequired,
  messages: PropTypes.instanceOf(List).isRequired
}

const mapStateToProps = createSelector(
  getUsers,
  users => ({
    users,
    messages: new List()
  })
)

const mapDispatchToProps = {
  signOut: authActions.signOut
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPage)