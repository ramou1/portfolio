"use client";

import React from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  color?: string;
  size?: string;
}

const Loader: React.FC<LoaderProps> = ({
  color = "var(--accent-color)",
  size = "60px",
}) => {
  // Variante de animação para os círculos
  const circleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i: number) => ({
      scale: 1,
      opacity: [0, 1, 0],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        delay: i * 0.2,
      },
    }),
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
      <div className="flex justify-center space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            style={{
              width: size,
              height: size,
              borderRadius: "50%",
              backgroundColor: color,
            }}
            variants={circleVariants}
            initial="initial"
            animate="animate"
            custom={i}
            className="shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;