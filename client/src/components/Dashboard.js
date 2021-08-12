import React from "react";
import useLocalStorage from "../utils/useLocalStorage";

// COMPONENTS
import Navbar from "./Navbar";

export default function Dashboard(props) {
  const { clearItem } = useLocalStorage("access-token");

  const logout = () => {
    clearItem();
    props.history.push("/");
  };

  return (
    <>
      <Navbar logout={logout} />
    </>
  );
}
