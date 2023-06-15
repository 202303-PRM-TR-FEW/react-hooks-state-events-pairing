import React, { useState } from "react";
import Buttons from "./LIkeButton";
import DownButtn from "./DownButtn";
import CommintButton from "./CommintButton";

function VideoHeader({
  embedUrl,
  createdAt,
  views,
  title,
  downvote,
  upvote,
  setUpVote,
  setDownVote,
  setVisbalty,
  visbalty,
}) {
  const [buttonText, setButtonText] = useState("Hide Commints");
  function handleUpVoteing() {
    setUpVote((pre) => pre + 1);
  }

  function handleDownVoteing() {
    setDownVote((pre) => pre - 1);
  }

  function handleVisbalty(){
    if(visbalty === "disply"){
      setVisbalty("");
      setButtonText("Hide Commints");
    }else{
      setVisbalty("disply");
      setButtonText("Show Commints")
    }
    
  }
  return (
    <>
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{title}</h1>
      <p>
        <b> views: </b> {views} <b> Created At: </b> {createdAt}
      </p>

      <Buttons handleUpVoteing={handleUpVoteing} contant={`${upvote} 👍`} />
      <DownButtn
        handleDownVoteing={handleDownVoteing}
        contant={`${downvote} 👎`}
      />
      <br></br>
      <CommintButton
        setButtonText={setButtonText}
        buttonText={buttonText}
        handleVisbalty={handleVisbalty}
      />
    </>
  );
}

export default VideoHeader;
