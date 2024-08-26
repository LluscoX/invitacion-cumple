
import video1 from '../assets/video1.mp4' 
import './VideoInvitacion.css'

const VideoInvitacion = () => {
  return (
    <div >
        <video
          className='video1'
          src={video1}
          autoPlay
          // controls
          loop
        ></video>
    </div>
    
  )
}

export default VideoInvitacion