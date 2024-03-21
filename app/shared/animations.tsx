"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Animations = React.memo(
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

export default Animations;
