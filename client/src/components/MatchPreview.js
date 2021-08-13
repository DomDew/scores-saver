import React from "react";
import { format } from "date-fns";

export default function MatchPreview(props) {
  console.log(typeof props.date);
  const date = format(new Date(props.date), "dd.MM.yy");

  return (
    <>
      <div className="match-top">
        <p>{date}</p>
        <h3
          className={
            props.matchResult === "win"
              ? "match-result match-win"
              : "match-result match-loss"
          }
        >
          {props.matchResult}
        </h3>
      </div>
      <div className="match-mid">
        <p>{props.ownerFaction}</p>
        <p>vs.</p>
        <p>{props.opponentFaction}</p>
      </div>
      <div className="match-bottom">
        <p>You: {props.ownerScore}</p>
        <p>Tobias: {props.opponentScore}</p>
      </div>
    </>
  );
}
