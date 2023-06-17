import React, { useState } from 'react'
import "./videoSidebar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ReplyIcon from '@mui/icons-material/Reply';
import {  yellow  } from '@mui/material/colors';

function VideoSidebar({likes, messages, saves, shares}) {

  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)

  function handdleLike() {  
    setLiked(!liked)
  }

  function handdleSave() {
    setSaved(!saved)
  }

  return (
    <div className='video-side-bar'>
      <div className='video-side-bar-options'    onClick={handdleLike}>
        { liked ? <FavoriteIcon color='error'/> : <FavoriteBorderIcon/> }

        <p>{liked ? likes + 1 : likes}</p>

      </div>

      <div className='video-side-bar-options'>
        <ChatIcon/>
        <p>{messages}</p>
      </div>

      <div className='video-side-bar-options' onClick={handdleSave}>
      { saved ? <BookmarkIcon sx = {{ color: yellow[800]}}/> : <BookmarkIcon />}

        <p>{saved ? saves + 1 : saves}</p>

      </div>

      <div className='video-side-bar-options'>
        <ReplyIcon/>
        <p>{shares}</p>
      </div>
      </div>
  )
}

export default VideoSidebar