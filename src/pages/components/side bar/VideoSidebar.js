import React, { useState } from "react";
import "./videoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ReplyIcon from "@mui/icons-material/Reply";
import { yellow } from "@mui/material/colors";
import { Stack, Avatar } from "@mui/material";

function VideoSidebar({ avatar, likes, messages, saves, shares }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  function handdleLike() {
    setLiked(!liked);
  }

  function handdleSave() {
    setSaved(!saved);
  }

  return (
    <div className="video-side-bar">
      {/*avatar do usuário*/}
      <div className="video-side-bar-options">
        <Stack spacing={4}>
          <Stack direction="row" spacing={1}>
            <Avatar
              src={avatar}
              className="userAvatar"
              sx={{ width: 45, height: 45 }}
            />
          </Stack>
        </Stack>
      </div>

      {/*curtidas*/}
      <div className="video-side-bar-options" onClick={handdleLike}>
        {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        <p>{liked ? likes + 1 : likes}</p>
      </div>

      {/*messagens*/}
      <div className="video-side-bar-options">
        <ChatIcon />
        <p>{messages}</p>
      </div>

      {/*salvamentos*/}
      <div className="video-side-bar-options" onClick={handdleSave}>
        {saved ? (
          <BookmarkIcon sx={{ color: yellow[800] }} />
        ) : (
          <BookmarkIcon />
        )}
        <p>{saved ? saves + 1 : saves}</p>
      </div>

      {/*compartilhamentos*/}
      <div className="video-side-bar-options">
        <ReplyIcon />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
