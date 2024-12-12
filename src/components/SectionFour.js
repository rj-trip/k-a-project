import React from "react";
import "../styles/SectionFour.css";
import { motion } from "framer-motion";
import img2 from "./img2.jpg";

function SectionFour() {
  return (
    <section className="section-four">
      <motion.div
        className="image-container"
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        dragElastic={0.5} // Adds elasticity to the drag movement
        whileTap={{ scale: 0.9 }} // Scale down the image when tapped
        whileHover={{ scale: 1.1 }} // Scale up the image on hover
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src={img2} alt="Innovation" className="section-four-image" />
      </motion.div>
    </section>
  );
}

export default SectionFour;
