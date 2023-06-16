import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./components/footer/VideoFooter";

function Video() {
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
      <video
        className="video-player"
        // controls
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://cdn-user.veed.io/render/e60b2f65-e714-4853-af7c-69a3281eee71.mp4#t=0.001">

      </video>
      {/*Side Bar*/}
      <VideoFooter />
    </div>
  );
}

export default Video;
