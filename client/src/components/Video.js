import { useRef, useState } from 'react'
import '../styles/Video.css'
import video1 from '../videos/video1.mp4'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

const Video = () => {
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
                src={video1}
            ></video>
            
            {/* Video Footer */}
            <VideoFooter/>

            {/* Video Sidebar */}
            <VideoSidebar/>

            
        </div>
    )
}

export default Video
