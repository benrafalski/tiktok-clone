import { useRef, useState } from 'react'
import '../styles/Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

const Video = ({ url, channel, description, song, likes, shares, messages, videos, id, likedByUser }) => {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)

    const handleVideoPress = () => {
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    }

    return (
        <div className='video'>
            {/* Source */}
            <video 
                onClick={handleVideoPress}
                className='video__player'
                loop
                ref={videoRef}
                src={url}
            ></video>
            
            {/* Video Footer */}
            <VideoFooter 
                channel={channel} 
                description={description}
                song={song}
            />

            {/* Video Sidebar */}
            <VideoSidebar 
                likes={likes} 
                shares={shares} 
                messages={messages}
                videos={videos}
                id={id}
                likedByUser={likedByUser}
            />

            
        </div>
    )
}

export default Video
