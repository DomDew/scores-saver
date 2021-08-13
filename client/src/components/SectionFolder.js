import React from "react";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SectionFolder(props) {
  const [isOpen, toggleOpen] = useCycle(props.cycleValue1, props.cycleValue2);

  const sectionVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.3, staggerDirection: 1 },
    },
    closed: {
      opacity: 1,
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
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
        <AnimatePresence exitBeforeEnter>
          {props.children &&
            isOpen &&
            props.children.map((element, index) => (
              <motion.div
                key={index}
                initial={{
                  y: -60,
                  opacity: 0,
                  transition: { y: { stiffness: 1000 } },
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { y: { stiffness: 1000 } },
                }}
                exit={{
                  y: -60,
                  opacity: 0,
                  transition: { y: { stiffness: 1000 } },
                }}
                className="section-block"
              >
                {element}
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
