import React from "react";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { motion, useCycle } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SectionFolder(props) {
  const [isOpen, toggleOpen] = useCycle(true, false);

  const sectionVariants = {
    open: {
      transition: { staggerChildren: 0.3, staggerDirection: 1 },
    },
    closed: {
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <>
      <div
        className={
          isOpen
            ? "section-folder-container section-active"
            : "section-folder-container"
        }
        onClick={() => toggleOpen()}
      >
        <h3>{props.title}</h3>
        <motion.p
          className="section-folder-arrow"
          initial={false}
          animate={isOpen ? { rotate: -180, y: 3 } : { rotate: 0, y: -3 }}
          transition={{ duration: 0.2 }}
        >
          <FontAwesomeIcon icon={faSortDown} />
        </motion.p>
      </div>
      <motion.div
        className="section-wrapper"
        variants={sectionVariants}
        animate={isOpen ? "open" : "closed"}
      >
        {props.children.map((element, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            animate={isOpen ? "open" : "closed"}
            className="section-block"
          >
            {element}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
