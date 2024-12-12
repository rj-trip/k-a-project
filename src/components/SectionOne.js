// import React from "react";
// import { motion } from "framer-motion";
// import "../styles/SectionOne.css";

// function SectionOne() {
//   return (
//     <section className="section-one">
//       <motion.h1
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Creating <br />
//         Discerning Digital Works and Communication Collaterals
//       </motion.h1>
//     </section>
//   );
// }

// export default SectionOne;


import React from "react";
import "../styles/SectionOne.css";

function SectionOne() {
  return (
    <section className="section-one">
      <div className="content">
        <h1>
          <span className="gradient-text">Creating</span>
        </h1>
        <p>Discerning Digital Works and Communication Collaterals</p>
      </div>
    </section>
  );
}

export default SectionOne;
