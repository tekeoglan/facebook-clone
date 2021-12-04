import { Avatar } from '@mui/material'
import React from 'react'
import '../css/Post.css'
import ThumpUpIcon from '@mui/icons-material/ThumbUp'
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined'
import NearMeIcon from '@mui/icons-material/NearMe'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { ExpandMoreOutlined } from '@mui/icons-material'

function Post({ profilePic, image, userName, timeStamp, message}) {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar
          src={profilePic}
          className="post_avatar"
        />
        <div className="post_topInfo">
          <h3>{userName}</h3>
          <p>{new Date(timeStamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post_bottom">
        <p>{message}</p>
      </div>

      <div className="post_image">
        {image ? (<img src={image} alt="post image" />) : (<div></div>) }
      </div>

      <div className="post_options">
        <div className="post_option">
          <ThumpUpIcon/>
          <p>Like</p>
        </div>
        <div className="post_option">
          <ChatBubbleOutlinedIcon/>
          <p>Comment</p>
        </div>
        <div className="post_option">
          <NearMeIcon/>
          <p>Share</p>
        </div>
        <div className="post_option">
          <AccountCircleIcon/>
          <ExpandMoreOutlined/>
        </div>
      </div>
    </div>
  )
}

export default Post 
