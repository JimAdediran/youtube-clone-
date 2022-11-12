import React from "react";

const VideoDisplay = (props) => {

let currentVideo = `http://www.youtube.com/embed/${props.id}`

    return (
    
        <iframe 
        id="player" 
        type="text/html" 
        width="640" 
        height="390"
        src={currentVideo}
        frameBorder="0">   
        </iframe>
      
    );
};

export default VideoDisplay