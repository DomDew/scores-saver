import React, { useEffect, useState } from "react";
import useLocalStorage from "../utils/useLocalStorage";

// COMPONENTS
import Navbar from "./Navbar";
import SectionFolder from "./SectionFolder";
import MatchPreview from "./MatchPreview";

export default function Dashboard(props) {
  const [matches, setMatches] = useState(null);
  const { clearItem, getItemWithExpiry } = useLocalStorage("access-token");
  const axios = require("axios");
  const accessToken = getItemWithExpiry();

  const fetchMatches = async () => {
    const url = "http://localhost:3001/api/v1/matches";
    const res = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    });
    const data = await res;
    console.log(data);
    return data;
  };

  useEffect(() => {
    if (!matches) {
      fetchMatches()
        .then((response) => {
          setMatches(response.data);
        })
        .catch((error) => console.error(error));
    }
  });

  const logout = () => {
    clearItem();
    props.history.push("/");
  };

  return (
    <div className="app-container">
      <Navbar logout={logout} />
      <SectionFolder
        title="Match History"
        cycleValue1={true}
        cycleValue2={false}
      >
        {matches &&
          matches.data.map((match) => (
            <MatchPreview
              key={match.id}
              date={match.attributes.date}
              matchResult={match.attributes.result}
              ownerFaction={match.attributes.player_scores[0].faction}
              opponentFaction={match.attributes.player_scores[1].faction}
              ownerScore={match.attributes.player_scores[0].total_vp}
              opponentName={match.attributes.player_scores[1].name}
              opponentScore={match.attributes.player_scores[1].total_vp}
            />
          ))}
      </SectionFolder>
      <SectionFolder
        title="Statistics"
        cycleValue1={false}
        cycleValue2={true}
      ></SectionFolder>
    </div>
  );
}
