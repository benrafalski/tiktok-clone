import '../styles/VideoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MessageIcon from '@material-ui/icons/Message'
import ShareIcon from '@material-ui/icons/Share'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { useEffect, useState, useRef, useLayoutEffect } from 'react'
import axios from '../axios.js'

const VideoSidebar = ({ likes, shares, messages, videos, id, likedByUser }) => {
    console.log(likedByUser)
    const [liked, setLiked] = useState(likedByUser)
    const [likeNumber, setLikeNumber] = useState(likes)

    /* const firstUpdate = useRef(true)

    useLayoutEffect(() => {
        if(firstUpdate.current){
            firstUpdate.current = false
            return
        }
    }, []) */
    
    useEffect(() => {
        const likePost = async (video) => {
            const res = await axios.put(`/v2/like/${video._id}`, { likes : video.likes+1, liked_by_user: true})
        }
        const unlikePost = async (video) => {
            const res = await axios.put(`/v2/like/${video._id}`, { likes : video.likes-1, liked_by_user: false})
        }
        liked 
            ? likePost(videos[0])
            : unlikePost(videos[0])
    }, [liked])

    //console.log("vid0 = " + videos[0].liked_by_user)
    return (
        <div className='video__sidebar'>
            <div className='video__sidebar__button'>
                {liked 
                    ? (<FavoriteIcon 
                            fontSize='large' 
                            onClick={(e) => setLiked(false)}
                        />) 
                    : (<FavoriteBorderIcon 
                            fontSize='large'
                            onClick={(e) => setLiked(true)}
                        />)
                }
                <p>{liked ? likes+=1 : likes}</p>
            </div>
            <div className='video__sidebar__button'>
                <MessageIcon fontSize='large'/>
                <p>{messages}</p>
            </div>
            <div className='video__sidebar__button'>
                <ShareIcon fontSize='large'/>
                <p>{shares}</p>
            </div>
            
        </div>
    )
}

export default VideoSidebar
