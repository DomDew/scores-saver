import React, { useEffect } from "react";
import useLocalStorage from "../utils/useLocalStorage";

// COMPONENTS
import Navbar from "./Navbar";
import SectionFolder from "./SectionFolder";
import MatchPreview from "./MatchPreview";

export default function Dashboard(props) {
  const { clearItem, getItemWithExpiry } = useLocalStorage("access-token");
  const axios = require("axios");
  const accessToken = getItemWithExpiry();

  const fetchMatches = async () => {
    console.log(accessToken);
    const url = "http://localhost:3001/api/v1/matches";
    const res = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": accessToken
      },
    });
    const data = await res;
    console.log(data);
  };

  useEffect(() => {
    fetchMatches();
  });

  const logout = () => {
    clearItem();
    props.history.push("/");
  };

  return (
    <div className="app-container">
      <Navbar logout={logout} />
      <SectionFolder title="Match History">
        <MatchPreview />
        <MatchPreview />
      </SectionFolder>
    </div>
  );
}
