import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function OurWork() {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#ffff" }}
    >
      <h1>Contact Us</h1>
    </motion.div>
  );
}

export default OurWork;
