import React from 'react'

function DownButtn({ contant, handleDownVoteing }) {
  return <button onClick={handleDownVoteing}>{contant}</button>;
}

export default DownButtn