import { useState, useEffect, useRef } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

function Curve() {
  const [isScaledDown, setIsScaledDown] = useState(false);
  const [isShown, setIsShown] = useState(true);
  const pathRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsScaledDown(true);
    }, 670); // Adjust the timeout as needed

    return () => clearTimeout(timeoutId);
  }, []);

  // Define the initial and target paths for the SVG curve animation
  const initialPath = `M0 ${window.innerHeight / 1} Q${window.innerWidth / 2} ${window.innerHeight / 2} ${window.innerWidth} ${window.innerHeight} L${window.innerWidth} ${window.innerHeight} L0 ${window.innerHeight} Z`;

  const targetPath = `M0 0 Q${window.innerWidth / 37} ${window.innerHeight / 37} ${window.innerWidth} 0 L${window.innerWidth} ${window.innerHeight} L0 ${window.innerHeight} Z`;

  const exitPath = `M0 0 Q${window.innerWidth / 4} ${window.innerHeight / 4} ${window.innerWidth} 0 L${window.innerWidth} ${window.innerHeight} L0 ${window.innerHeight} Z`;

  const curveVariants = {
    initial: {
      d: initialPath,
      scaleY: isScaledDown ? 0 : 1,
      transition: {
        duration: 1.3,
      },
    },
    animate: {
      d: targetPath,
      scaleY: isScaledDown ? 0 : 2,
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      d: exitPath,
      scaleY: 12,
      opacity: 0,
      y: window.innerHeight,
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
        onComplete: () => {
          setIsShown(false); // Hide the SVG after animation
        },
      },
    },
  };

  return (
    isShown && (
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
        preserveAspectRatio="none"
        style={{
          position: 'fixed', // Ensure it's covering the screen
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: isShown ? 10 : -1, // Adjust z-index to hide SVG after animation
          pointerEvents: 'none', // Disable pointer events permanently once it's hidden
        }}
      >
        <motion.path
          fill="#FF6347"
          ref={pathRef}
          variants={curveVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      </svg>
    )
  );
}

export default Curve;
