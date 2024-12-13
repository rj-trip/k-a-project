// import React from "react";
// import "../styles/SectionThree.css";

// function SectionThree() {
//   return (
//     <section className="section-three">
//       <h2>Fast. Reliable. Secure.</h2>
//       <p>Our infrastructure ensures optimal performance and scalability.</p>
//     </section>
//   );
// }

// export default SectionThree;
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/SectionThree.css";

function SectionThree() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="section-three" ref={ref}>
      <div className="left-panel">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : -50,
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="section-three-heading"
        >
          35,000
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -70 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : -70,
          }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          className="section-three-description"
        >
          Websites Already Thriving with Us!
        </motion.p>
      </div>
      <div className="right-panel">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 50,
          }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          className="section-three-heading"
        >
          Experience the power of speed with our cutting-edge hosting
          infrastructure.
        </motion.h2>
      </div>
    </section>
  );
}

export default SectionThree;
