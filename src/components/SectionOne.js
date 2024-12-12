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

// import React from "react";
// import "../styles/SectionOne.css";
// import img3 from "./img3.jpg";
// import { motion } from "framer-motion";
// function SectionOne() {
//   return (
//     <section className="section-one">
//       <div className="div1">
//         <motion.img
//           src={img3}
//           transition={{
//             y: {
//               duration: 0.4,
//               yoyo: Infinity,
//               ease: "easeOut",
//             },
//           }}
//           animation={{
//             y: ["100%", "-100%"],
//           }}
//           className="img1"
//           alt="img1"
//         />
//       </div>
//       <div className="content">
//         <h1>
//           <span className="gradient-text">Creating</span>
//         </h1>
//         <p>Discerning Digital Works and Communication Collaterals</p>
//       </div>
//       <div className="div2">
//         <img src={img3} className="img2" alt="img1" />
//       </div>
//     </section>
//   );
// }

// export default SectionOne;

// import React from "react";
// import { motion } from "framer-motion";
// import "../styles/SectionOne.css";
// import img3 from "./img3.jpg";

// const bounceTrans = {
//   y: {
//     duration: 0.4,
//     yoyo: Infinity,
//     ease: "easeOut",
//   },
// };
// function SectionOne() {
//   const title = "Creating";
//   const description = "Discerning Digital Works and Communication Collaterals";

//   return (
//     <section className="section-one">
//       <motion.div
//         transition={bounceTrans}
//         animation={{
//           y: ["100%", "-100%"],
//         }}
//         className="div1"
//       >
//         <img src={img3} className="img1" alt="img1" />
//       </motion.div>
//       <div className="content">
//         {/* Animated Title */}
//         <motion.h1
//           className="gradient-text"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           {title.split("").map((char, index) => (
//             <motion.span
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               {char}
//             </motion.span>
//           ))}
//         </motion.h1>

//         {/* Animated Description */}
//         <motion.p
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
//         >
//           {description}
//         </motion.p>
//       </div>
//       <div className="div2">
//         <img src={img3} className="img2" alt="img1" />
//       </div>
//     </section>
//   );
// }

// export default SectionOne;

import React from "react";
import { motion } from "framer-motion";
import "../styles/SectionOne.css";
import img3 from "./img3.jpg";

const bounceAnimation = {
  y: [0, -20, 0], // Bounce up and down
  transition: {
    duration: 0.6, // Duration of one cycle
    repeat: Infinity, // Infinite loop
    repeatType: "loop",
    ease: "easeInOut", // Smooth easing
  },
};

function SectionOne() {
  const title = "Creating";
  const description = "Discerning Digital Works and Communication Collaterals";

  return (
    <section className="section-one">
      {/* Bouncing Image */}
      <motion.div className="div1" animate={bounceAnimation}>
        <img src={img3} className="img1" alt="Bouncing Image" />
      </motion.div>

      {/* Content */}
      <div className="content">
        {/* Animated Title */}
        <motion.h1
          className="gradient-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Animated Description */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Static Image */}
      <motion.div
        className="div2"
        animate={bounceAnimation}
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
      >
        <img src={img3} className="img2" alt="Bouncing Image" />
      </motion.div>
    </section>
  );
}

export default SectionOne;
