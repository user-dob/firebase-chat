import React from 'react'

export const MessageSend = () => {
  return (
    <div>
      <div className="send-wrap ">
        <textarea className="form-control send-message" rows="3" placeholder="Write a reply..."></textarea>
      </div>
      <div className="btn-panel">
        <a href="" className=" col-lg-4 text-right btn   send-message-btn pull-right" role="button"><i className="fa fa-plus"></i> Send Message</a>
      </div>
    </div>
  )
}

export default MessageSend
