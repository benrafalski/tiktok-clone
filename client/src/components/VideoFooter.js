import '../styles/VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import VideoSidebar from './VideoSidebar'
import Ticker from 'react-ticker'

const VideoFooter = ({ channel, description, song }) => {
    return (
        <div className='video__footer'>
            <div className='video__footer__text'>
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className='video__footer__ticker'>
                    <MusicNoteIcon className='video__footer__icon'/>
                    <Ticker mode='smooth'>
                        {({index}) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img
                className='video__footer__record'
                src='http://static.thenounproject.com/png/934821-200.png'
                alt=''
            />
        </div>
    )
}

export default VideoFooter
