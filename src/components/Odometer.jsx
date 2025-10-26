import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Odometer = ({ value }) => {
  // Ensure the value is treated as a string to split digits
  const digits = String(value).split("").map(Number);
  const digitStack = Array.from({ length: 10 }, (_, i) => i); // Stack of numbers 0-9

  return (
    <div style={{ display: "flex", fontSize: "2rem", fontWeight: "bold" }}>
      {digits.map((digit, index) => (
        <div
          key={index}
          style={{
            overflow: "hidden",
            height: "2.5rem", // Digit height
            width: "1.5rem", // Fixed digit width for alignment
            display: "flex",
            justifyContent: "center",
          }}
        >
          <motion.div
            key={digit}
            initial={{ y: `-${(digit + 1) % 10}00%` }} // Start at current digit position
            animate={{ y: `-${digit}00%` }} // Animate to the new digit position
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {digitStack.map((stackDigit) => (
              <div
                key={stackDigit}
                style={{
                  height: "2.5rem", // Match container height
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {stackDigit}
              </div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Odometer