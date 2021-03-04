import React,{useState} from 'react'
import './VideoSIdeBar.css'
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
function VideoSIdeBar() {
    const [liked,setLike]=useState(false);

    return (
        <div className="videoSideBar">
            <div className="IconHolder">
            {liked ? (
          <FavoriteIcon fontSize="large" onClick={() => setLike(false)} />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={() => setLike(true)}
          />
        )}
        <p>{liked ?100 + 1 : 100}</p>
            </div>
            <div className="IconHolder">
                <MessageIcon fontSize="large"/>
                <p>222</p>
            </div>
            <div className="IconHolder">
               <ShareIcon fontSize="large"/>
               <p>333</p>
            </div>
        </div>
    )
}

export default VideoSIdeBar
