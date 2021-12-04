import { Avatar } from '@mui/material'
import React from 'react'
import '../css/Story.css'

function Story({ image, profileSrc, title }) {
  return (
    <div className="story">
      <Avatar className="story_avatar" src={profileSrc}/>
      <h4>{title}</h4>
    </div>
  )
}

export default Story
