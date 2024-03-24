"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export const ContentAnimations = React.memo(
  ({ children, delay }: { children: any; delay: number }) => {
    // Define the animation variants
    const variants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };

    const transition = {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      delay: delay,
    };

    return (
      <motion.div
        initial="hidden"
        animate={"visible"}
        variants={variants}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }
);
ContentAnimations.displayName = "ContentAnimations";
// ANIMATED SLIDE ANIMATIONS

const SlideAnimations = ({ children }: { children: any }) => {
  const carouselItemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <AnimatePresence>
      <motion.div
        variants={carouselItemVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
        // className={style}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

SlideAnimations.displayName = "SlideAnimations";

export default SlideAnimations;
