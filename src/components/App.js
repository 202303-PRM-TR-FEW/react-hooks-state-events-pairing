import video from "../data/video.js";
import Commints from "./Commints.jsx";
import VideoHeader from "./VideoHeader.jsx";
import React, { useState } from "react";

function App() {
  const [upvote, setUpVote] = useState(video.upvotes)
  const [downvote, setDownVote] = useState(video.downvotes)
  const [visbalty, setVisbalty] = useState("")
  return (
    <div className="App">
      <VideoHeader
        embedUrl={video.embedUrl}
        views={video.views}
        title={video.title}
        createdAt={video.createdAt}
        upvote={upvote}
        downvote={downvote}
        visbalty={visbalty}
        setVisbalty={setVisbalty}
        setDownVote={setDownVote}
        setUpVote={setUpVote}
      />
      <hr/>
      <Commints 
      visbalty={visbalty}
      Commints={video.comments}/>
    </div>
  );
}

export default App;
