import React from 'react'

export const MessageItem = ({message}) => {
  return (
    <div className="media msg">
      <a className="pull-left" href="#">
        <img className="media-object" src="http://placehold.it/64x64"  alt="64x64" src="http://placehold.it/64x64"  />
      </a>
      <div className="media-body">
        <small className="pull-right time"><i className="fa fa-clock-o"></i> 12:10am</small>

        <h5 className="media-heading">Naimish Sakhpara</h5>
        <small className="col-lg-10">Arnab Goswami: "Some people close to Congress Party and close to the government had a #secret #meeting in a farmhouse in Maharashtra in which Anna Hazare send some representatives and they had a meeting in the discussed how to go about this all fast and how eventually this will end."</small>
      </div>
    </div>
  )
}

export default MessageItem
