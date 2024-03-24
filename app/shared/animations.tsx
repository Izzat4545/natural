"use client";
import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "framer-motion";

export const ContentAnimations = React.memo(
  ({ children, delay }: { children: any; delay: number }) => {
    // Use the useInView hook to detect when the element is in view
    const ref = useRef(null);
    const isInView = useInView(ref);

    // Define the animation variants
    const variants = {
      hidden: { opacity: 0, y: 20 }, // Start with opacity 0 and move 20px down
      visible: { opacity: 1, y: 0 }, // End with opacity 1 and at original position
    };

    // Define the animation options
    const transition = {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      delay: delay,
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Animate based on whether the element is in view
        variants={variants}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }
);

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

export default SlideAnimations;
