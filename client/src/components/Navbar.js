import React from "react";
import { motion, useCycle } from "framer-motion";

// COMPONENTS
import { MenuToggle } from "./MenuToggle";
import { NavItems } from "./NavItems";

// IMAGES
import navLogo from "../images/logo-small.svg";

const variants = {
  open: {
    display: "flex",
    opacity: [0, 1],
    time: [0, 1],
    transition: { duration: 0.2 },
  },
  closed: {
    display: "none",
    transition: { duration: 0.2, delay: 0.5 },
  },
};

export default function Navbar(props) {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <img src={navLogo} alt="" className="nav-logo" />
      <button className="btn-small">new game</button>
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
        <MenuToggle toggle={() => toggleOpen()} />
        <motion.div
          className="sub-menu-container"
          initial={{ display: "none" }}
          variants={variants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.2 }}
        >
          <NavItems logout={props.logout} />
        </motion.div>
      </motion.nav>
    </motion.nav>
  );
}
