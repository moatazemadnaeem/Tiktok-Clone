import React,{useRef,useState} from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSIdeBar from './VideoSIdeBar'

function Video({url}) {
  const [playing,setPlaying]= useState(false)
 
  const vidRef=useRef(null)
  const handelvidclick=()=>{
    if(playing){
      vidRef.current.pause();
      setPlaying(false);
    }
    else{
      vidRef.current.play();
      setPlaying(true);
    }
  }
    return (
        <div className="video">
         
         <video 
         onClick={handelvidclick}
         ref={vidRef}
         loop 
         className="video__player" 
         src={url}>
         </video>
         <VideoFooter/> 
         <VideoSIdeBar/>
        </div>
         
    )
}

export default Video
