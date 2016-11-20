import React from 'react'

export const Video = ({className}) => {
  return (
    <video className={className} autoPlay="false" muted="muted" preload="auto" loop>
      <source src="/assets/milky-way-river-1280hd.mp4.mp4" type="video/mp4" />
    </video>
  )
}

export default Video