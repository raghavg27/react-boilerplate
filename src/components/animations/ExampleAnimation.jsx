// src/components/animations/ExampleAnimation.jsx

import React from "react";
import { motion } from "framer-motion";

const ExampleAnimation = () => {
  // Define animation variants for the message
  const messageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Welcome to the Animated Page!</h2>

      {/* Animated message */}
      <motion.div
        className="p-4 bg-blue-500 text-white rounded-md shadow-lg"
        variants={messageVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeOut" }}
      >
        This is a message to the user, animated with Framer Motion!
      </motion.div>
    </div>
  );
};

export default ExampleAnimation;
