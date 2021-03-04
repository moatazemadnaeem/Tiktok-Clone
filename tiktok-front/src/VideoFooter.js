import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'
function VideoFooter() {
    return (
        <div className="videofooter">
            <div className="footer-text-container">
                <h3>@moatazemad</h3>
                <p>this is some text</p>
                <div className="video-ticker">
                    < MusicNoteIcon className="videoIcon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>this is song</p>
                                
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img 
            className="videoFooter__record"
            src="https://static.thenounproject.com/png/934821-200.png"
            alt=""
            />
        </div>
    )
}

export default VideoFooter
