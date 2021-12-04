import React from 'react'
import '../css/StoryReel.css'
import Story from './Story'

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://i.ytimg.com/vi/pKNEx-9OqRM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBIKnVbWkNx9Ny_3Ffqilyv7XbB6w"
        profileSrc="https://yt3.ggpht.com/ETWTR7HYBqK5v4fAbwBJPWLiE26v_BNN-XIBmWaZlvN6QvA7eb6iTg75agy5P2COZzoQCeMMBKQ=s68-c-k-c0x00ffffff-no-rj"
        title="riot games"
      />
      <Story
        image=""
        profileSrc=""
        title=""
      />
      <Story
        image=""
        profileSrc=""
        title=""
      />
    </div>
  )
}

export default StoryReel
