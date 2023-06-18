import React, { useRef, useState } from "react";
import "./video.css";
import Header from "./components/header/Header";
import VideoFooter from "./components/footer/VideoFooter";
import VideoSidebar from "./components/side bar/VideoSidebar";

function Video({likes, messages, saves, shares, avatar, nameAccount, description, musicName, url}) {
  const videoRef = useRef(null);
  const [videoState, setPlay] = useState(false);

  function handdleStart() {
    //  definindo o estado do video, de acordo com o clique do usuário
    if (!videoState) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  }

  return (
    <div className="container-video">
      <Header />
      <video
        className="video-player"
        // controls
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={url}>

      </video>
      <VideoSidebar 
        avatar = {avatar}
        likes = {likes}
        messages = {messages}
        saves = {saves}
        shares = {shares}
        />
      <VideoFooter
        nameAccount = {nameAccount}
        description = {description}
        musicName = {musicName}
      />
    </div>
  );
}

export default Video;
