import React from 'react'
import MessageItem from '../message-item'

export const MesssageList = ({messages}) => {
  return (
    <div className="msg-wrap">
      {messages.map(item => <MessageItem key={item.key} message={item} />)}
    </div>
  )
}

export default MesssageList
