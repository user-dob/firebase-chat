import React, { PropTypes } from 'react'
import Video from 'src/views/components/video'

export const App = ({children}) => {
  return (
    <div className="vid-container">
      <Video className="bgvid back" />
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element
}

export default App