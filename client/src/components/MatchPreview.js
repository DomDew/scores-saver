import React from "react";

export default function MatchPreview(props) {
  return (
    <>
      <div className="match-top">
        <p>24.07.21</p>
        <h3 className="match-result match-win">Win</h3>
      </div>
      <div className="match-mid">
        <p>Death Guard</p>
        <p>vs.</p>
        <p>Imperial Fists</p>
      </div>
      <div className="match-bottom">
        <p>You: 68</p>
        <p>Tobias: 34</p>
      </div>
    </>
  );
}
