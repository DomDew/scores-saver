import React from "react";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { motion, useCycle } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SectionFolder(props) {
  const [isOpen, toggleOpen] = useCycle(props.cycleValue1, props.cycleValue2);

  const sectionVariants = {
    open: {
      transition: { staggerChildren: 0.3 },
    },
    closed: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
      display: "block",
    },
    closed: {
      opacity: 0,
      y: -60,
      transition: { duration: 0.3 },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
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
      </motion.div>

      <motion.div
        className="section-wrapper"
        variants={sectionVariants}
        animate={isOpen ? "open" : "closed"}
      >
        {props.children &&
          props.children.map((element, index) => (
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
