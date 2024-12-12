import React, { useState } from "react";
import "../styles/SectionFive.css";
import { motion } from "framer-motion";
function SectionFive() {
  const [hovering, setHovering] = useState(false);
  return (
    <section
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="section-five"
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={hovering ? { x: "100%" } : { x: 0 }}
        transition={{ ease: [0.22, 1, 0.36, 1] }}
        className="action"
      >
        <h2 className="section-five-subheading">Join 400+</h2>
        <div className="section-five-heading">Let's unite for innovation</div>
      </motion.div>
    </section>
  );
}

export default SectionFive;
