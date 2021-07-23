import { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video';
import videosFiles from './videos/videoExport.js'
import axios from './axios'

function App() {
  const [videos, setVideos] = useState([]) // videos array initialization
  
  useEffect(() => {
    const fetchPosts = async () => {
      const response  = await axios.get('/v2/posts')
      setVideos(response.data)
    }

    /* const likePost = async (id, likes) => {
      const res = await axios.put(`/v2/like/${id}`, { likes : likes + 1 })
      
    } */

    fetchPosts()
  }, [])

  return (
    <div className="app">
      <div className='app__videos'>
        {videos.map((video, index) => (
          <Video 
            id={video._id}
            url={videosFiles[index]}
            channel={video.channel} 
            description={video.description} 
            song={video.song}
            likes={video.likes} 
            shares={video.shares} 
            messages={video.messages}
            videos={videos}
            likedByUser={video.liked_by_user}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
