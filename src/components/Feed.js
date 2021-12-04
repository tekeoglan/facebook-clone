import React, { useEffect, useState } from 'react'
import '../css/Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from '../firebase'
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore'

function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timeStamp", "desc"))
    const unsub = onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((d) => ({
        id: d.id, data: d.data()
      })))
    })
    console.log({posts})
  }, [])

  return (
    <div className="feed">
     <StoryReel/> 
     <MessageSender/>
     {posts.map((post) => (
       <Post
        key={post.id}
        profilePic={post.data.profilePic}
        image={post.data.image}
        userName={post.data.userName}
        timeStamp={post.data.timeStamp}
        message={post.data.message}
        />
     ))}
    </div>
  )
}

export default Feed
