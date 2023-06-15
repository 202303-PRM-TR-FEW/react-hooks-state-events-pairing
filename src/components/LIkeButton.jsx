import React from "react";

function Buttons({ contant, handleUpVoteing, handleDownVoteing }) {
  return(
     <button onClick={handleUpVoteing}>{contant}</button>
  )
}

export default Buttons;
