import React, { useRef, useState, useEffect } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import "./video.css";
import VideoFooter from "./components/footer/VideoFooter";
import VideoSidebar from "./components/side bar/VideoSidebar";

function Video({likes, messages, saves, shares, avatar, nameAccount, description, musicName, url, index }) {
  const videoRef = useRef(null);
  const [videoState, setPlay] = useState(false);

  function handdleStart() {
    //  definindo o estado do video, de acordo com o clique do usuário
    if (!videoState) {
      console.log("o video será iniciado!(mudando o setPlay para verdadeiro!")
      videoRef.current.play();
      setPlay(true);
    } else {
      console.log("o video será pausado(mudando o setPlay para falso")
      videoRef.current.pause();
      setPlay(false);
    }
  }

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      videoRef.current.play();
      console.log(index)
      setPlay(true)
    }
    else {
      if (videoRef.current.play) {
        videoRef.current.pause();
        setPlay(false)
      }
    }
  }, [isVisible]);

  return (
    <div className="container-video">
      <ReactVisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
      <video
        className="video-player"
        controls = {false}
        ref={videoRef}
        onClick={handdleStart}
        loop
        playsInline
        src={url}>
      </video>
      </ReactVisibilitySensor>
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
