"use client";;
import React, { useId } from "react";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { motion, useAnimation } from "framer-motion";

export const SparklesCore = (props) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  const [init, setInit] = useState(false);
  useEffect(() => {

  }, []);
  const controls = useAnimation();

  const particlesLoaded = async (container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };

  const generatedId = useId();
  return (
    (<motion.div animate={controls} className={cn("opacity-0", className)}>
      {}
    </motion.div>)
  );
};
