//import React, { useState } from "react";
import { useParams } from "react-router-dom";

const VideoPage = () => {;
   
    const { id } = useParams();


return (
    <div>
        <div>
        <iframe id="player" type="text/html" width="640" height="390"
  src={`http://www.youtube.com/embed/{id}`}
  frameborder="0"></iframe>
        </div>

    </div>
)
}

export default VideoPage;