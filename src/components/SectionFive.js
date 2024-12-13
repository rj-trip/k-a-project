import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/SectionFive.css";

function SectionFive() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="section-five" ref={ref}>
      <div className="action">
        <motion.h2
          className="section-five-subheading"
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : 50,
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Join 400+
        </motion.h2>
        <motion.div
          className="section-five-heading"
          initial={{ opacity: 0, x: 70 }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -70,
          }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        >
          Let's unite for innovation
        </motion.div>
      </div>
    </section>
  );
}

export default SectionFive;
