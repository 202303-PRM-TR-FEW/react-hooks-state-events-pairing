import React from 'react'

function CommintButton({ buttonText, handleVisbalty }) {
  return <button onClick={() => handleVisbalty()}>{buttonText}</button>;
}

export default CommintButton