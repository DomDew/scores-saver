import React from "react";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { motion, useCycle } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SectionFolder(props) {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div
      className={
        isOpen
          ? "section-folder-container"
          : "section-folder-container section-active"
      }
      onClick={() => toggleOpen()}
    >
      <h3>{props.title}</h3>
      <motion.p
        initial={false}
        animate={isOpen ? { rotate: -180, y: 3 } : { rotate: 0, y: -3 }}
        transition={{ duration: 0.2 }}
      >
        <FontAwesomeIcon icon={faSortDown} />
      </motion.p>
    </div>
  );
}
