// import React from "react";
// import "../styles/MidOfFourFive.css";
// const MidofFourFive = () => {
//   return (
//     <div className="content">
//       <h2 className="section-four-heading">Let's unite for innovation </h2>
//     </div>
//   );
// };

// export default MidofFourFive;
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "../styles/MidOfFourFive.css";

const MidofFourFive = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="content" ref={ref}>
      <motion.h2
        className="section-four-heading"
        initial={{ opacity: 0, x: 50 }}
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : 50,
        }}
        transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
      >
        Let's unite for
        <br />
        Innovation
      </motion.h2>
    </div>
  );
};

export default MidofFourFive;
