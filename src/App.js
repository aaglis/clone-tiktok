import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
      <div className='container-app'>
      <Video 
        likes= {0}
        messages = {0}
        saves={1}
        shares = {0}

        nameAccount = "aaglis"
        description = "gatinho fofo lambendo morango"
        musicName = "músia do próprio autor do vídeo."
        url = "https://cdn-user.veed.io/render/ced51dc8-f2d1-42ec-bcd7-3a243fd37da4.mp4#t=0.001"
      />

      <Video 
        likes= {1}
        messages = {1}
        saves= {0}
        shares = {1}

        nameAccount = "alsoclaris"
        description = "gatinho fofo lambendo morango"
        musicName = "músia do próprio autor do vídeo."
        url = "https://cdn-user.veed.io/render/e60b2f65-e714-4853-af7c-69a3281eee71.mp4#t=0.001"
      />

      </div>
    </div>
  );
}

export default App;
