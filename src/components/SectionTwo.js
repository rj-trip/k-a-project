// import React from "react";
// import "../styles/SectionTwo.css";

// function SectionTwo() {
//   return (
//     <section className="section-two">
//       <div className="content">
//         <h2>We are</h2>
//         <p>
//           Experience the power of speed with our cutting-edge hosting infrastructure.
//         </p>
//       </div>
//       <div className="image">
//         <img src="path/to/image1.jpg" alt="Decorated Content" />
//       </div>
//     </section>
//   );
// }

// export default SectionTwo;

import React from "react";
import "../styles/SectionTwo.css";
import img1 from "./img1.png";
import { motion } from "framer-motion";
import { useState } from "react";
function SectionTwo() {
  const [hovering, setHovering] = useState(false);
  return (
    <section
      className="section-two"
      onMouseEnter={() => setHovering(false)}
      onMouseLeave={() => setHovering(true)}
    >
      <div className="content">
        <motion.h2
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{
            duration: "1",
            delay: "0.2",
          }}
          className="section-two-heading"
        >
          <span className="special">We are</span>
        </motion.h2>
        <motion.h3
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{
            duration: "1.5",
            delay: "0.5",
          }}
          className="section-two-heading2"
        >
          Creative Designers, Insightful Strategists, and Exceptional Engineers
        </motion.h3>
        <motion.p
          initial={{ x: -100 }}
          animate={hovering ? { x: -1000 } : { x: 0 }}
          transition={{
            ease: [0.22, 1, 0.36, 1],
            duration: "1.5",
            delay: "0.5",
          }}
          className="section-two-description"
        >
          The organization is focused on foregrounding expertise in its
          services, staying updated on global trends, refining domain knowledge,
          and adapting to evolving content creation arenas to effectively serve
          client brands.
        </motion.p>
      </div>
      {/* <div className="image">
        <motion.img
          src={img1}
          drag={true}
          dragConstraints={{
            top: -90,
            left: -90,
            right: -90,
            bottom: -90,
            contain: "center",
            inertia: 0.5,
            precision: 0.01,
          }}
          dragElastic={0.95}
          alt="Creative Designers, Insightful Strategists, and Exceptional Engineers"
          className="section-two-image"
        />
      </div> */}

      <div className="image">
        <motion.img
          src={img1}
          alt="Creative Designers, Insightful Strategists, and Exceptional Engineers"
          className="section-two-image"
          whileHover={{ rotate: 360, scale: 1.5 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}

export default SectionTwo;
