import React from "react";

function Commints({ Commints, visbalty }) {
  const commintsNum = Commints.length;
  const commintsContaint = Commints.map((commint) => {
    return (
      <>
        <h4>{commint.user}</h4>
        <p>{commint.comment}</p>
      </>
    );
  });
  return (
    <div className={visbalty}>
      <h2>Commints {commintsNum}</h2>
      {commintsContaint}
    </div>
  );
}

export default Commints;
