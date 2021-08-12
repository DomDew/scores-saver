// DEPENDENCIES
import React from "react";
import { Link, Redirect } from "react-router-dom";
import { motion } from "framer-motion";
import useLocalStorage from "../utils/useLocalStorage";

// IMAGES
import logo from "../images/logo.svg";

// button: get started --> If user logged in, e.g. acces token im local storage, dann direkt auf das dashboard routen.
// wenn user nicht logged in, dann auf login routen

export default function Home() {
  const { getItemWithExpiry } = useLocalStorage("access-token");

  return (
    <div className="main-container">
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        exit={{ y: -500 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <header
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "400px",
          }}
        >
          <img
            src={logo}
            className="home-logo"
            alt="The Scores Saver Logo: A die showing the number five ontop of two crossed measures with the text 'Scores Saver' beneath"
          />
          <h3 className="home-subheader">
            Keep track of your tabletop scores. <br></br>Anytime, anywhere!
          </h3>
        </header>
      </motion.div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        {getItemWithExpiry() ? (
          <Redirect to="/dashboard" />
        ) : (
          <Link
            to={{
              pathname: "/login",
              fromLink: false,
            }}
          >
            <button className="btn-main">Get started</button>
          </Link>
        )}
      </motion.div>
    </div>
  );
}
