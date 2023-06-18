import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {

  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos")
    const videosDocs = await getDocs(videosCollection)
    const videosList = videosDocs.docs.map(doc => doc.data())

    setVideos(videosList)
  }

  useEffect(() => {
    getVideos();
  }, [])

  return (
    <div className="App">
      <div className="container-app">
        {video.map((item) => {
          return (
            <Video
            avatar={item.avatar}
            likes={item.likes}
            messages={item.messages}
            saves={item.saves}
            shares={item.shares}
            nameAccount={item.nameAccount}
            description={item.description}
            musicName={item.musicName}
            url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
