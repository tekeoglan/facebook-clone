import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import '../css/MessageSender.css'
import VideocamIcon from '@mui/icons-material/Videocam'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import { useStateValue } from '../StateProvider'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import db from '../firebase'
import firebase from 'firebase/compat/app'

function MessageSender() {
  const [{ user }, dispatch] = useStateValue()

  const [input, setInput] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const docRef = addDoc(collection(db, "posts"), {
      message: input,
      timeStamp: serverTimestamp(),
      profilePic: user.photoURL,
      userName: user.displayName,
      image: imageUrl
    })

    setInput('')
    setImageUrl('')
  }

  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar src={user.photoURL}/>
        <form>
          <input
            className="messageSender_input"
            placeholder={`What's on your mind?`}
            value={input}
            onChange={(e) => {setInput(e.target.value)}}
          />
          <input
            type="text"
            placeholder="image URL (optinal)"
            value={imageUrl} 
            onChange={(e) => {setImageUrl(e.target.value)}}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <VideocamIcon style={{color: "red"}} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender_option">
          <PhotoLibraryIcon style={{color: "green"}} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender_option">
          <InsertEmoticonIcon style={{color: "orange"}} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>

    </div>
  )
}

export default MessageSender
