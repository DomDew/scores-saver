import * as React from "react";
import { motion } from "framer-motion";

const animatorVariants = {
  open: {
    transition: { staggerChildren: 0.3, staggerDirection: 1 },
  },
  closed: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000 },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const NavItems = (props) => {
  return (
    <motion.div className="sub-menu-animator" variants={animatorVariants}>
      <motion.button
        className="sub-menu-item btn-sub-menu"
        onClick={props.logout}
        variants={itemVariants}
      >
        logout
      </motion.button>
      <motion.button
        className="sub-menu-item btn-sub-menu"
        variants={itemVariants}
      >
        account
      </motion.button>
    </motion.div>
  );
};
